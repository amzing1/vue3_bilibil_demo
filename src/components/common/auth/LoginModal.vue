import { ref } from 'vue';
import { login } from '../../../http';
<template>
  <Modal v-model="showModal" transfer :closable="false" class-name="login-modal">
    <template #header>
      <div class="login-modal-header"></div>
    </template>
    <template #footer>
      <div class="login-modal-footer"></div>
    </template>
    <div class="login-modal-content">
      <div>扫描二维码登录</div>
      <div>密码登录 | 短信登录</div>
      <div class="code-block">
        <img src="@/assets/logo.png" alt="code"><br />
        请使用哔哩哔哩客户端扫码登录或扫码下载APP
      </div>
      <div class="login-form">
        <Input v-model="email"><template #prepend>账号</template></Input>
        <Input v-model="password" style="margin-top: 8px"><template #prepend>密码</template></Input>
        <div class="actions" style="margin-top: 16px">
          <Button>注册</Button>
          <Button type="primary" @click="login">登录</Button>
        </div>
        <span class="text-block">其它方式登录</span>
        <div style="margin-top: 8px;" class="other-ways">
          <span>
            <Icon type="md-snow" /> 微信登录
          </span>
          <span>
            <Icon type="md-snow" /> 微博登录
          </span>
          <span>
            <Icon type="md-snow" /> QQ登录
          </span>
        </div>
      </div>
      <div class="description">
        未注册过哔哩哔哩的手机号，我们将自动帮你注册账号<br />
        登录或完成注册即代表你同意 <span class="blue">用户协议</span> 和 <span class="blue">隐私政策</span>
      </div>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import { useUser } from '../../../hooks/user'
const { email, password, login } = useUser()
defineProps<{
  showModal: boolean
}>();
defineEmits<{
  closeModal: () => void
}>();
</script>

<style lang="scss">
.login-modal {
  .ivu-modal {
    width: 82rem !important;
    height: 44rem;
    color: $color-text;

    .login-modal-content {
      width: 100%;
      height: 100%;
      display: grid;
      padding: 2.4rem;
      grid-template-columns: 1fr 2fr;
      grid-template-rows: 1fr 4fr 2fr;
      justify-items: center;
      align-items: center;

      .code-block {
        width: 17.3rem;
        text-align: center;

        img {
          width: 17.3rem;
          height: 17.3rem;
        }
      }

      .login-form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 40rem;

        .ivu-input {
          width: 100%;
          height: 4.3rem;
        }

        .ivu-input-group-prepend {
          background-color: $color-white;
        }

        .actions {
          width: 100%;

          .ivu-btn {
            width: 48%;
            height: 4rem;

            &:first-child {
              margin-right: 4%;
            }
          }
        }

        .text-block {
          margin-top: 16px;
          color: $color-text-fade;
        }

        .other-ways {
          width: 100%;
          display: flex;
          justify-content: space-around;

          .ivu-icon {
            color: $color-blue;
          }
        }
      }

      .description {
        grid-column-start: 1;
        grid-column-end: 3;
        text-align: center;
        color: $color-text-fade;
      }
    }
  }

  .ivu-modal-header,
  .ivu-modal-footer {
    padding: 0;
    border: none;
  }

  .ivu-modal-body {
    height: 44rem;
  }
}
</style>