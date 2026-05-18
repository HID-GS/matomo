<!--
  Copyright (C) InnoCraft Ltd - All rights reserved.

  NOTICE:  All information contained herein is, and remains the property of InnoCraft Ltd.
  The intellectual and technical concepts contained herein are protected by trade secret
  or copyright law. Redistribution of this information or reproduction of this material is
  strictly forbidden unless prior written permission is obtained from InnoCraft Ltd.

  You shall use this code only in accordance with the license agreement obtained from
  InnoCraft Ltd.

  @link https://www.innocraft.com/
  @license For license details see https://www.innocraft.com/license
-->

<template>
  <a href=""
     class="modal-action btn"
     style="margin-right: 1rem;"
     :disabled="reAuthToken"
     @click="onClickReAuth($event)"
  >
    {{ translate('LoginSaml_ReAuthViaSSO') }}
    </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  AjaxHelper,
  NotificationsStore,
  translate,
} from 'CoreHome';

let checkSSOSuccessfulIntervalID = 0;

interface PasswordConfirmationReAuthState {
  reAuthToken: string|null;
}

const notificationId = 'error-confirm-password-authentication';
export default defineComponent({
  emits: ['confirmed'],
  data(): PasswordConfirmationReAuthState {
    return {
      reAuthToken: null,
    };
  },
  methods: {
    onClickReAuth(event: MouseEvent) {
      event.preventDefault();
      // open a new Tab to reAuth
      const token = `reAuth_${Math.random().toString(16).slice(2)}`;

      const newWindow = window.open(`?module=LoginSaml&action=reAuthSSO&reAuthToken=${token}`, '_blank');
      if (newWindow) {
        newWindow.focus();
      }

      // Also start calling an Ajax endpoint to check if reAuth successful
      this.reAuthToken = token;

      checkSSOSuccessfulIntervalID = setInterval(this.isReAuthCompleted, 2000);
    },
    isReAuthCompleted() {
      if (this.reAuthToken && window.localStorage.getItem(this.reAuthToken)) {
        window.localStorage.removeItem(this.reAuthToken);
        clearInterval(checkSSOSuccessfulIntervalID);
        this.checkSSOStatus(this.reAuthToken);
      }
    },
    checkSSOStatus(token: string) {
      NotificationsStore.remove(notificationId);
      AjaxHelper.post(
        { module: 'LoginSaml', action: 'reAuthSSOStatus' },
        { reAuthToken: this.reAuthToken },
      ).then((response) => {
        this.reAuthToken = null;
        if (response && response.status === 1) {
          this.$emit('confirmed', token);
        } else {
          NotificationsStore.show({
            message: translate(
              'LoginSaml_LoginSamlReAuthUnsuccessful',
              `<strong>${translate('LoginSaml_ReAuthViaSSO')}</strong>`,
            ),
            id: notificationId,
            context: 'error',
            type: 'persistent',
          });
        }
      });
    },
  },
});

</script>
