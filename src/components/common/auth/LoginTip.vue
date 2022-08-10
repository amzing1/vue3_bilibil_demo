<template>
  <div class="login-tip" ref="self">
    <slot name="title"></slot>
    <p class="goods">
      <span><Icon type="ios-baseball" /> 免费看高清视频</span>
      <span><Icon type="ios-baseball" /> 多端同步播放记录</span>
    </p>
    <p class="goods">
      <span><Icon type="ios-baseball" /> 发表弹幕/评论</span>
      <span><Icon type="ios-baseball" /> 热门番剧影视看不停</span>
    </p>
    <Button class="login-btn" type="primary">立即登录</Button>
    <p v-if="showSignup" class="signup">首次使用？<span class="blue">点我注册</span></p>
    <Icon type="ios-close" class="close" size="36" @click="closeLoginTip" v-if="showClose" />
  </div>
</template>

<script setup lang="ts">import { Ref, ref } from '@vue/reactivity';

defineProps<{
  showSignup: boolean,
  showClose: boolean
}>();

const self: Ref<null | HTMLElement> = ref(null);

function closeLoginTip() {
  const element = self.value;
  if (!element || !element.parentNode) {
    return;
  }
  (element.parentNode as HTMLElement).style.display = 'none';
}
</script>

<style lang="scss">
.login-tip {
  position: relative;
  width: 100%;
  background-color: $color-white;
  .goods {
    display: flex;
    height: 4rem;
    align-items: center;
    justify-content: space-between;
    span {
      display: inline-block;
      width: 50%;
      .ivu-icon {
        color: $color-blue;
      }
      &:last-child {
        margin-left: 16px;
      }
    }
  }
  .login-btn {
    width: 100%;
    height: 4rem;
    border-radius: 4px;
    margin: 5px 0 10px 0;
  }
  .signup {
    display: flex;
    justify-content: center;
  }
  .close {
    cursor: pointer;
    position: absolute;
    top: -1.2rem;
    right: -0.4rem;
  }

}
</style>