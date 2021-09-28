<template>
  <div class="home">
    <Head />
    <Nav />
    <div class="main">
      <component :is="currentView">
      </component>
    </div>
  </div>
</template>

<style lang="less" scoped>
.main {
  box-sizing: border-box;
  width: 95%;
  margin: 5px 2.5%;
  padding-bottom: 60px;
}
</style>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import Head from "@/components/home/head/Head.vue"
import Nav from "@/components/home/head/Nav.vue"
import Tuijian from "@/components/home/tuijian/Tuijian.vue"
import Zhibo from "@/components/home/zhibo/Zhibo.vue"
import { useStore } from 'vuex';


export default defineComponent({
  name: 'Home',
  components: {
    Head,
    Nav,
    Tuijian,
    Zhibo,
  },
  setup() {

    const store = useStore();

    let currentView = computed(() => {
      console.log('111');
      switch(store.state.currentIndex) {
        case 0:
          return "Zhibo";
        case 1:
          return "Tuijian";
        case 2:
          return "remen";
        case 3:
          return "zhuifan";
        case 4:
          return "yingshi";
        case 5:
          return "jiandang";
        default:
          return "Tuijian";
      }
    })

    return {
      currentView,
    }
  }
});
</script>
