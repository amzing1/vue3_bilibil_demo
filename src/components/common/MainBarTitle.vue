<template>
  <div class="main-bar-title" :class="isAllWidth ? 'all-width' : 'not-all-width'">
    <p class="title">{{ title }}</p>
    <template v-if="showRightBtn">
      <div class="action">
        <GrayButton name="换一换" />
        <GrayButton name="查看更多" />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import GrayButton from './GrayButton.vue';
defineProps<{
  title: string,
  isAllWidth: boolean,
  showRightBtn: boolean
}>()
</script>