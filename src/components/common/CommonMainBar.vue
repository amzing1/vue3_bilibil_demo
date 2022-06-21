<script setup lang="ts">
import MainBarTitle from '../common/MainBarTitle.vue';
import VideoCard from '../common/VideoCard.vue';
import RankingList from '../common/RankingList.vue';
import { ERankingType, Video } from '../../types/home/home-type';
import CartooRankingList from './CartooRankingList.vue';
defineProps<{
  title: string,
  listData: Video[],
  rankingType: ERankingType
}>();
</script>

<template>
  <div class="common-bar">
    <MainBarTitle :title="title" :isAllWidth="false" showRightBtn />
    <div class="common-bar-content">
      <div class="cards-wrapper">
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
      <div class="right">
        <RankingList :list-data="listData" v-if="rankingType === ERankingType.ZHIBO_ROOM" />
        <CartooRankingList :list-data="listData" v-else-if="rankingType === ERankingType.VIDEO" />
      </div>
    </div>
    
  </div>
</template>