<template>
  <div class="top-navigation" style="overflow: hidden; transition: height 1s ease 0s;">
    <video src="../../assets/video/kPbkWcX74M.mp4" loop playsinline class="top-navigation-video"></video>
    <div class="top-navigation-content">
      <div class="top-navigation-content-left">
        <div class="content" v-for="text in left">{{ text }}</div>
      </div>
      <SearchDropDown :search-text="searchText" />
      <div class="top-navigation-content-right">
        <Avatar icon="ios-person" size="large" class="content" />
        <div class="content small-jump" v-for="text in right">{{ text }}</div>
        <div class="upload">投稿</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SearchDropDown from './SearchDropDown.vue'

const left = ['首页', '番剧', '直播', '游戏中心', '会员购', '漫画', '赛事', '下载客户端'];
const right = ['大会员', '消息', '动态', '收藏', '历史', '创作中心'];
const searchText = ref('')
</script>
