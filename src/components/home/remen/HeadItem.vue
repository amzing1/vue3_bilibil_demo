<template>
    <div class="headItem">
        <div class="icon" :style="{backgroundColor: bg}">
            <slot name="icon"></slot>
        </div>
        <span class="title">{{title}}</span>
    </div>
</template>

<style lang="less" scoped>
.headItem {
    width: 30%;
    text-align: center;

    .icon {
        display: inline-block;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        color: #fff;
        line-height: 50px;
        font-size: 25px;
    }

    .title {
        display: block;
        color: #777;
        font-size: 12px;
    }
}
</style>

<script lang="ts">
import { defineComponent } from 'vue'


export default defineComponent({
    props: {
        title: String,
        bg: String,
    },
    setup() {
        return {}
    },
})
</script>
