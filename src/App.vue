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
</script>

<template>
  <TopNavigation />
  <VideoTypeBar />
  <VideoRecommand />
  <PromotionVue />
  <Advertisement />
  <ZhiboBar />
  <CartooBar />
</template>

