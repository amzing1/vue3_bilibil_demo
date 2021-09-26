<template>
  <div class="home">
    <Head />
    <Nav />
  </div>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Head from "@/components/home/head/Head.vue"
import Nav from "@/components/home/head/Nav.vue"

export default defineComponent({
  name: 'Home',
  components: {
    Head,
    Nav
  },
  setup() {
    return {}
  }
});
</script>
