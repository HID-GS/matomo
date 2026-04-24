#!/usr/bin/env python3

import argparse
import json
import os
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


def has_files(
    root: Path,
    suffixes: tuple[str, ...],
    excluded_parts: set[str],
    filename_suffix: str | None = None,
) -> bool:
    if not root.is_dir():
        return False

    for path in root.rglob("*"):
        if not path.is_file() or path.suffix not in suffixes:
            continue
        if filename_suffix and not path.name.endswith(filename_suffix):
            continue

        relative_parts = set(path.relative_to(root).parts[:-1])
        if relative_parts & excluded_parts:
            continue

        return True

    return False


def has_system_tests(plugin_dir: Path) -> bool:
    excluded = {
        "Integration",
        "Unit",
        "UI",
        "javascript",
        "Fixtures",
        "Fixture",
        "Mocks",
        "resources",
        "expected",
    }
    return has_files(plugin_dir / "tests", (".php",), excluded, "Test.php") or has_files(
        plugin_dir / "Test", (".php",), excluded, "Test.php"
    )


def has_integration_tests(plugin_dir: Path) -> bool:
    return (plugin_dir / "tests" / "Integration").is_dir() or (
        plugin_dir / "Test" / "Integration"
    ).is_dir()


def has_ui_tests(plugin_dir: Path) -> bool:
    candidates = [plugin_dir / "tests" / "UI", plugin_dir / "Test" / "UI"]
    for root in candidates:
        if has_files(root, (".js",), set()) and any(
            path.name.endswith("_spec.js") for path in root.rglob("*") if path.is_file()
        ):
            return True
    return False


def build_plugin_rows(
    plugin_names: Iterable[str], php_environments: list[dict]
) -> list[dict]:
    rows = []
    for plugin_name in plugin_names:
        for environment in php_environments:
            rows.append(
                {
                    "plugin-name": plugin_name,
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
    args = parser.parse_args()

    repo_root = Path(args.repo_root).resolve()
    plugins_root = repo_root / "plugins"
    php_environments = load_php_environments(os.environ["PHP_TEST_ENVIRONMENTS"])

    plugins = list_plugins(plugins_root)
    system_plugins = [plugin.name for plugin in plugins if has_system_tests(plugin)]
    integration_plugins = [plugin.name for plugin in plugins if has_integration_tests(plugin)]
    ui_plugins = [plugin.name for plugin in plugins if has_ui_tests(plugin)]

    outputs = {
        "unit_matrix": build_core_rows(php_environments),
        "system_core_matrix": build_core_rows(php_environments),
        "system_plugins_matrix": build_plugin_rows(system_plugins, php_environments),
        "integration_core_matrix": build_core_rows(php_environments),
        "integration_plugins_matrix": build_plugin_rows(integration_plugins, php_environments),
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
