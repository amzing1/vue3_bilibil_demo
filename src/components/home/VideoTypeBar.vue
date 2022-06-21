<template>
<div class="video-type-bar">
  <div class="bar-left">
    <div class="bar-left-item">
      <img class="item-image" src="../../assets/image/aaf33dced1941af0946f37c62f4b48fcaba9c9a2.jpg" alt="head-image">
      <p class="item-name">动态</p>
    </div>
     <div class="bar-left-item">
      <img class="item-image" src="../../assets/image/aaf33dced1941af0946f37c62f4b48fcaba9c9a2.jpg" alt="head-image">
      <p class="item-name">热门</p>
    </div>
     <div class="bar-left-item">
      <img class="item-image" src="../../assets/image/aaf33dced1941af0946f37c62f4b48fcaba9c9a2.jpg" alt="head-image">
      <p class="item-name">频道</p>
    </div>
  </div>
  <div class="bar-mid">
    <div class="bar-mid-content">
      <GrayButton v-for="type in types" :name="type"/>
    </div>
  </div>
  <div class="bar-right">
    <span v-for="type in types2"> {{ type }}</span>
  </div>
</div>
</template>

<script setup lang="ts">
import GrayButton from '../common/GrayButton.vue';
const types = ['番剧', '国创', '综艺', '动画', '鬼畜', '舞蹈', '娱乐', '科技', '美食', '汽车', '运动', 'VLOG', '电影', '电视剧', '纪录片', '游戏', '音乐', '影视', '知识', '资讯', '生活', '时尚', '动物圈', '更多']
const types2 = ['专栏', '活动', '社区中心', '直播', '课堂', '新歌热榜'];
</script>