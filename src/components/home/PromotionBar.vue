<script setup lang="ts">
import MainBarTitle from '../common/MainBarTitle.vue';
import VideoCard from '../common/VideoCard.vue';
</script>

<template>
  <div class="promotion-bar">
    <MainBarTitle title="推广" isAllWidth :showRightBtn="false" />
    <div class="cards-wrapper">
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
    </div>
  </div>
</template>