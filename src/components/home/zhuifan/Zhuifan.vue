<template>
    <div class="zhuifan">
        <Carousel>
            <img class="car-img" src="@/assets/images/one.jpg" />
            <img class="car-img" src="@/assets/images/two.png" />
            <img class="car-img" src="@/assets/images/three.png" />
            <img class="car-img" src="@/assets/images/four.png" />
        </Carousel>
    </div>
</template>

<style lang="less" scoped>
.zhuifan {
    .car-img {
        width: 100%;
        border-radius: 5px;
    }
}
</style>

<script lang="ts">
import { defineComponent } from 'vue'
import Carousel from '../carousel/Carousel.vue'

export default defineComponent({
    name: 'zhuifan',
    components: {
        Carousel
    },
    setup() {
        return {}
    },
})
</script>
