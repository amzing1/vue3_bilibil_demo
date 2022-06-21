<template>
  <Dropdown trigger="click" @click="showDropDown" transfer transfer-class-name="top-navigation-dropdown">
    <div class="top-navigation-content-search" v-show="!showInput">
      <Icon type="md-search" class="search-icon" />
    </div>
    <div class="top-navigation-content-search2" v-show="showInput">
      <div class="top-navigation-content-input">
        <Input ref="searchInput" />
      </div>
      <Icon type="md-search" class="search-icon" />
    </div>
    <template #list>
      <DropdownMenu class="search-panel">
        <DropdownItem>驴打滚</DropdownItem>
        <DropdownItem>炸酱面</DropdownItem>
        <DropdownItem>豆汁儿</DropdownItem>
        <DropdownItem>冰糖葫芦</DropdownItem>
        <DropdownItem>北京烤鸭</DropdownItem>
      </DropdownMenu>
    </template>
  </Dropdown>
</template>

<script setup lang="ts">
import { nextTick, ref } from 'vue';

const showInput = ref(false)

const props = defineProps<{
  searchText: string
}>()
const searchInput = ref<HTMLInputElement | null>(null);

function showDropDown() {
  showInput.value = !showInput.value;
  nextTick(() => {
    (searchInput.value as HTMLInputElement).focus();
  })

}


</script>