<template>
  <div id="nav">
    <!-- <router-link to="/">Home</router-link> 
    <router-link to="/about">About</router-link> -->
    <nav-bar></nav-bar>
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from '@/components/navBar/NavBar.vue'

export default defineComponent({
  components: {
    NavBar
  },
  setup() {
    return {}
  },
})
</script>


<style lang="less">

</style>
