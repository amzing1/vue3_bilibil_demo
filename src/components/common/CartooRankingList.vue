<template>
  <div class="cartoo-ranking-list">
    <ul>
      <li v-for="(cartoo, idx) in listData" :key="cartoo.id" class="cartoo-ranking-list-item">
        <HoverCard>
          <div class="list-item-wrapper">
            <i class="ranking-number">{{ idx + 1 }}</i>
            <img src="../../assets/image/cartoo.webp" alt="image" class="video-image" v-if="idx === 0">
            <span class="ranking-name">{{ cartoo.name }}</span>
          </div>
        </HoverCard>
      </li>
    </ul>
    <div class="head">
      <h2>排行榜</h2>
      <GrayButton name="更多" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Video } from '../../types/home/home-type';
import GrayButton from './GrayButton.vue';
import HoverCard from './HoverCard.vue';
defineProps<{
  listData: Array<Video>
}>();
</script>