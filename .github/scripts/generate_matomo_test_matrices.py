#!/usr/bin/env python3

import argparse
import json
import os
import re
from pathlib import Path
from typing import Iterable


def load_php_environments(raw: str) -> list[dict]:
    environments = json.loads(raw)
    if not isinstance(environments, list):
        raise ValueError("PHP_TEST_ENVIRONMENTS must decode to a list")

    required_keys = {"php", "adapter", "mysql-engine", "mysql-version"}
    for environment in environments:
        if not required_keys.issubset(environment):
            raise ValueError(
                "Each PHP environment must contain php, adapter, mysql-engine and mysql-version"
            )

    return environments


def list_plugins(plugins_root: Path) -> list[Path]:
    return sorted(path for path in plugins_root.iterdir() if path.is_dir())


def parse_global_ini_plugins(global_ini_path: Path) -> set[str]:
    plugins: set[str] = set()
    in_plugins_section = False

    for raw_line in global_ini_path.read_text(encoding="utf-8").splitlines():
        line = raw_line.strip()

        if not line or line.startswith(";"):
            continue

        if line == "[Plugins]":
            in_plugins_section = True
            continue

        if in_plugins_section and line.startswith("["):
            break

        if in_plugins_section and line.startswith("Plugins[]"):
            _, value = line.split("=", 1)
            plugins.add(value.strip())

    return plugins


def parse_core_plugins_disabled_by_default(plugin_list_path: Path) -> set[str]:
    contents = plugin_list_path.read_text(encoding="utf-8")
    match = re.search(
        r"private \$corePluginsDisabledByDefault = array\((.*?)\);",
        contents,
        re.S,
    )
    if not match:
        raise ValueError("Unable to parse corePluginsDisabledByDefault from PluginList.php")

    return set(re.findall(r"'([^']+)'", match.group(1)))


def get_bundled_plugins(repo_root: Path) -> set[str]:
    bundled_plugins = parse_global_ini_plugins(repo_root / "config" / "global.ini.php")
    bundled_plugins.update(
        parse_core_plugins_disabled_by_default(
            repo_root / "core" / "Application" / "Kernel" / "PluginList.php"
        )
    )
    return bundled_plugins


def count_matching_files(
    root: Path,
    suffixes: tuple[str, ...],
    excluded_parts: set[str],
    filename_suffix: str | None = None,
) -> int:
    if not root.is_dir():
        return 0

    count = 0
    for path in root.rglob("*"):
        if not path.is_file() or path.suffix not in suffixes:
            continue
        if filename_suffix and not path.name.endswith(filename_suffix):
            continue

        relative_parts = set(path.relative_to(root).parts[:-1])
        if relative_parts & excluded_parts:
            continue

        count += 1

    return count


def get_plugin_suite_info(
    plugin_dir: Path,
    suite_dir: str,
    suffixes: tuple[str, ...],
    filename_suffix: str | None = None,
) -> tuple[str, str, int] | None:
    candidates = [
        (
            plugin_dir / "tests" / suite_dir,
            f"plugins/{plugin_dir.name}/tests/{suite_dir}/",
            f"plugins/{plugin_dir.name}/tests",
        ),
        (
            plugin_dir / "Test" / suite_dir,
            f"plugins/{plugin_dir.name}/Test/{suite_dir}/",
            f"plugins/{plugin_dir.name}/Test",
        ),
    ]

    for root, path, source_root in candidates:
        file_count = count_matching_files(root, suffixes, set(), filename_suffix)
        if file_count:
            return path, source_root, file_count

    return None


def get_ui_suite_info(plugin_dir: Path) -> tuple[str, int] | None:
    candidates = [
        (plugin_dir / "tests" / "UI", f"plugins/{plugin_dir.name}/tests/UI/"),
        (plugin_dir / "Test" / "UI", f"plugins/{plugin_dir.name}/Test/UI/"),
    ]

    for root, path in candidates:
        spec_count = count_matching_files(root, (".js",), set(), "_spec.js")
        if spec_count:
            return path, spec_count

    return None


def bucket_suite_rows(
    plugins: Iterable[tuple[str, str, str, int]], bucket_count: int, suite_name: str
) -> list[dict]:
    plugins = sorted(plugins, key=lambda plugin: (-plugin[3], plugin[0]))
    if not plugins:
        return []

    bucket_count = max(1, min(bucket_count, len(plugins)))
    buckets = [{"weight": 0, "plugins": [], "paths": [], "source_roots": []} for _ in range(bucket_count)]

    for plugin_name, phpunit_path, source_root, weight in plugins:
        bucket = min(buckets, key=lambda item: (item["weight"], len(item["plugins"])))
        bucket["weight"] += max(weight, 1)
        bucket["plugins"].append(plugin_name)
        bucket["paths"].append(phpunit_path)
        bucket["source_roots"].append(source_root)

    non_empty_buckets = [bucket for bucket in buckets if bucket["plugins"]]
    total_buckets = len(non_empty_buckets)

    return [
        {
            "bucket-label": f"bucket-{index:02d}-of-{total_buckets:02d}",
            "bucket-path": f"tmp/github-action-test-buckets/{suite_name}/bucket-{index:02d}",
            "plugin-count": len(bucket["plugins"]),
            "plugins": ", ".join(bucket["plugins"]),
            "phpunit-paths": " ".join(bucket["paths"]),
            "bucket-source-roots": " ".join(bucket["source_roots"]),
        }
        for index, bucket in enumerate(non_empty_buckets, start=1)
    ]


def build_php_bucket_rows(
    buckets: Iterable[dict], php_environments: list[dict]
) -> list[dict]:
    rows = []
    for bucket in buckets:
        for environment in php_environments:
            rows.append(
                {
                    "bucket-label": bucket["bucket-label"],
                    "bucket-path": bucket["bucket-path"],
                    "plugin-count": bucket["plugin-count"],
                    "plugins": bucket["plugins"],
                    "phpunit-paths": bucket["phpunit-paths"],
                    "bucket-source-roots": bucket["bucket-source-roots"],
                    "php": environment["php"],
                    "adapter": environment["adapter"],
                    "mysql-engine": environment["mysql-engine"],
                    "mysql-version": environment["mysql-version"],
                }
            )
    return rows


def build_core_rows(php_environments: list[dict]) -> list[dict]:
    return [
        {
            "php": environment["php"],
            "adapter": environment["adapter"],
            "mysql-engine": environment["mysql-engine"],
            "mysql-version": environment["mysql-version"],
        }
        for environment in php_environments
    ]


def build_ui_core_rows(group_count: int) -> list[dict]:
    return [{"part": part} for part in range(group_count)]


def write_output(name: str, value) -> None:
    output_path = os.environ.get("GITHUB_OUTPUT")
    if not output_path:
        raise RuntimeError("GITHUB_OUTPUT is not set")

    with open(output_path, "a", encoding="utf-8") as handle:
        handle.write(f"{name}={json.dumps(value, separators=(',', ':'))}\n")


def write_count(name: str, count: int) -> None:
    output_path = os.environ.get("GITHUB_OUTPUT")
    if not output_path:
        raise RuntimeError("GITHUB_OUTPUT is not set")

    with open(output_path, "a", encoding="utf-8") as handle:
        handle.write(f"{name}={count}\n")


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--repo-root", required=True)
    parser.add_argument("--ui-core-group-count", required=True, type=int)
    parser.add_argument("--system-plugin-bucket-count", required=True, type=int)
    parser.add_argument("--integration-plugin-bucket-count", required=True, type=int)
    args = parser.parse_args()

    repo_root = Path(args.repo_root).resolve()
    plugins_root = repo_root / "plugins"
    php_environments = load_php_environments(os.environ["PHP_TEST_ENVIRONMENTS"])
    bundled_plugins = get_bundled_plugins(repo_root)

    plugins = [plugin for plugin in list_plugins(plugins_root) if plugin.name in bundled_plugins]
    system_plugins = []
    integration_plugins = []
    ui_plugins = []

    for plugin in plugins:
        system_info = get_plugin_suite_info(plugin, "System", (".php",), "Test.php")
        if system_info:
            system_plugins.append((plugin.name, system_info[0], system_info[1], system_info[2]))

        integration_info = get_plugin_suite_info(plugin, "Integration", (".php",), "Test.php")
        if integration_info:
            integration_plugins.append(
                (plugin.name, integration_info[0], integration_info[1], integration_info[2])
            )

        ui_info = get_ui_suite_info(plugin)
        if ui_info:
            ui_plugins.append(plugin.name)

    system_plugin_buckets = bucket_suite_rows(
        system_plugins, args.system_plugin_bucket_count, "system"
    )
    integration_plugin_buckets = bucket_suite_rows(
        integration_plugins, args.integration_plugin_bucket_count, "integration"
    )

    outputs = {
        "unit_matrix": build_core_rows(php_environments),
        "system_core_matrix": build_core_rows(php_environments),
        "system_plugins_matrix": build_php_bucket_rows(
            system_plugin_buckets, php_environments
        ),
        "integration_core_matrix": build_core_rows(php_environments),
        "integration_plugins_matrix": build_php_bucket_rows(
            integration_plugin_buckets, php_environments
        ),
        "ui_core_matrix": build_ui_core_rows(args.ui_core_group_count),
        "ui_plugins_matrix": [{"plugin-name": plugin_name} for plugin_name in ui_plugins],
    }

    counts = {
        "system_plugins_count": len(outputs["system_plugins_matrix"]),
        "integration_plugins_count": len(outputs["integration_plugins_matrix"]),
        "ui_plugins_count": len(outputs["ui_plugins_matrix"]),
    }

    for name, value in outputs.items():
        write_output(name, value)

    for name, value in counts.items():
        write_count(name, value)

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
