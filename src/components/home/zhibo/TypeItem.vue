<template>
    <div class="typeItem">
        <img :src="imgUrl" class="img" />
        <span class="title">{{title}}</span>
    </div>
</template>

<style lang="less" scoped>
.typeItem {
    width: 20%;
    text-align: center;
    background-color: #fff;
    border-radius: 5px;
    padding: 5px 0;

    .img {
        width: 100%;
        vertical-align: middle;
    }

    .title {
        font-size: 12px;
    }
}
</style>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        imgUrl: String,
        title: String,
    },
    setup() {
        return {}
    },
})
</script>
