<template>
  <div class="home">
    <Head />
    <Nav />
    <div class="main">
      <Carousel />
    </div>
  </div>
  
</template>

<style lang="less" scoped>
.main {
  box-sizing: border-box;
  width: 95%;
  margin: 5px 2.5%;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import Head from "@/components/home/head/Head.vue"
import Nav from "@/components/home/head/Nav.vue"
import Carousel from "@/components/home/carousel/Carousel.vue"

export default defineComponent({
  name: 'Home',
  components: {
    Head,
    Nav,
    Carousel
  },
  setup() {
    return {}
  }
});
</script>
