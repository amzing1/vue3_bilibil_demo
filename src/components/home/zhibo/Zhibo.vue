<template>
    <div class="zhibo">
        <Carousel>
            <img class="car-img" src="@/assets/images/zhibo1.jpg" />
            <img class="car-img" src="@/assets/images/zhibo2.jpg" />
        </Carousel>
        <TypeList />
    </div>
</template>

<style lang="less" scoped>
.car-img {
    width: 100%;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue'
import Carousel from '../carousel/Carousel.vue'
import TypeList from './TypeList.vue'

export default defineComponent({
    name: 'Zhibo',
    components: {
        Carousel,
        TypeList
    },
    setup() {
        return {}
    },
})
</script>
