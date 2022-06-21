<template>
<div class="ranking-list">
  <ul>
    <li v-for="(room, idx) in listData" :key="room.id" class="ranking-list-item">
      <i class="ranking-number">{{ idx + 1 }}</i>
      <img src="../../assets/image/ranking-head.webp" alt="image" class="item-head-image">
      <div class="right">
        <div class="item-msg">
          <p class="item-name">{{ room.name }}</p>
          <p class="item-description">{{ room.description }}</p>
        </div>
        <div class="item-watch-count">{{ room.watchCount }}</div>
      </div>
    </li>
  </ul>
  <div class="head">
    <h2>排行榜</h2>
    <GrayButton name="更多"/>
  </div>
</div>
</template>

<script setup lang="ts">
import { Video } from '../../types/home/home-type';
import GrayButton from './GrayButton.vue';
defineProps<{
  listData: Array<Video>
}>();
</script>