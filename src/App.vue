<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import TopNavigation from './components/common/TopNavigation.vue'
import VideoTypeBar from './components/home/VideoTypeBar.vue';
import VideoRecommand from './components/home/VideoRecommand.vue';
import PromotionVue from './components/home/PromotionBar.vue';
import Advertisement from './components/common/Advertisement.vue';
import ZhiboBar from './components/home/ZhiboBar.vue';
import CartooBar from './components/home/CartooBar.vue';
import LoginTip from './components/common/auth/LoginTip.vue';
import { useApp } from './hooks/useApp';
const { isUserLogin } = useApp();
</script>

<template>
  <div class="app">
    <TopNavigation />
    <VideoTypeBar />
    <VideoRecommand />
    <PromotionVue />
    <Advertisement />
    <ZhiboBar />
    <CartooBar />
    <div class="login-tip-wrapper" v-if="isUserLogin">
      <LoginTip :show-close="true" :show-signup="false">
        <template #title>
          <div class="title">登录bilibili，享受更多权益！</div>
        </template>
      </LoginTip>
    </div>
  </div>
</template>

