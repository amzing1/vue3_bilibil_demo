<template>
    <div class="carousel">
        <NCarousel autoplay>
            <slot></slot>
        </NCarousel>
    </div>
</template>

<style lang="less" scoped>
.carousel {
    width: 100%;
    margin-bottom: 5px;

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
