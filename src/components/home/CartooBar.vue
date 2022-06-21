<script setup lang="ts">
import { ref } from 'vue';
import { Video, ERankingType } from '../../types/home/home-type';
import CommonMainBar from '../common/CommonMainBar.vue';
const listData = ref([
  {
    name: '间谍过家家',
    description: '三十功名尘与土，八千里路云和月',
    id: 'xkkkjfksjkfddddds',
    watchCount: '11.1万',
    coverImage: 'https://i0.hdslb.com/bfs/face/efc8e1f22ce595cb30c42bc329b29ab588fc849d.jpg@72w_72h.webp'
  } as Video
]);
for (let i = 0; i < 8; i++) {
  listData.value.push(listData.value[0]);
}
</script>

<template>
  <CommonMainBar title="动画" :list-data="listData" :ranking-type="ERankingType.VIDEO"/>
</template>