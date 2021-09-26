<template>
    <div class="carousel">
        <NCarousel autoplay>
            <img class="car-img" src="@/assets/images/one.jpg">
            <img class="car-img" src="@/assets/images/two.png">
            <img class="car-img" src="@/assets/images/three.png">
            <img class="car-img" src="@/assets/images/four.png">
        </NCarousel>
    </div>
</template>

<style lang="less" scoped>
.carousel {
    width: 100%;
    height: 200px;
    background-color: green;

    .car-img {
        width: 100%;
    }
}
</style>


<script lang="ts">
import { defineComponent } from 'vue'

import { NCarousel } from "naive-ui"

export default defineComponent({
    components: {
        NCarousel
    },
    setup() {
        return {}
    },
})
</script>
