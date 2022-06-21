<script setup lang="ts">
import { ref } from 'vue';
import { Video, ERankingType } from '../../types/home/home-type';
import CommonMainBar from '../common/CommonMainBar.vue';
const listData = ref([
  {
    name: '小番茄',
    description: '狼烟起，江山北望，风卷起马长嘶，剑气如霜',
    id: 'xkkkjfksjkfds',
    watchCount: '20.1万',
    coverImage: 'https://i0.hdslb.com/bfs/face/efc8e1f22ce595cb30c42bc329b29ab588fc849d.jpg@72w_72h.webp'
  } as Video
]);
for (let i = 0; i < 7; i++) {
  listData.value.push(listData.value[0]);
}
</script>

<template>
  <CommonMainBar title="直播" :list-data="listData" :ranking-type="ERankingType.ZHIBO_ROOM"/>
</template>