<script setup lang="ts">
import VideoCard from '../common/VideoCard.vue';
import Lunbo from '../common/Lunbo.vue';
</script>

<template>
  <div class="video-recommand-bar">
    <Lunbo />
    <div class="right">
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
    </div>
  </div>
</template>