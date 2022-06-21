<template>
<div class="gray-button">
  {{ name }}
</div>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string
}>()
</script>

<style lang="scss">
@import "../../styles/abstracts/variables.scss";

.gray-button {
  display: inline-block;
  width: 9.2rem;
  line-height: 3.2rem;
  border-radius: .6rem;
  background-color: $color-gray;
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: $color-deep-gray;
  }
}
  
</style>