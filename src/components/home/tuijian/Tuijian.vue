<template>
    <div class="tuijian">
        <Carousel>
            <img class="car-img" src="@/assets/images/one.jpg" />
            <img class="car-img" src="@/assets/images/two.png" />
            <img class="car-img" src="@/assets/images/three.png" />
            <img class="car-img" src="@/assets/images/four.png" />
        </Carousel>
        <Content />
    </div>
</template>

<style lang="less" scoped>
  .car-img {
    width: 100%;
  }
</style>

<script lang="ts">
import { defineComponent } from 'vue'

import Carousel from "@/components/home/carousel/Carousel.vue"
import Content from "@/components/home/content/Content.vue"

export default defineComponent({
    name: 'Tuijian',
    components: {
        Carousel,
        Content,
    },
    setup() {
        return {}
    },
})
</script>
