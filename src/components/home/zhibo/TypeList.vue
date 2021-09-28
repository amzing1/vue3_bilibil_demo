<template>
    <div class="typeList">
        <TypeItem v-for="(item,index) in typeList" :key=index :imgUrl="item.imgUrl" :title="item.title" />
    </div>
</template>

<style lang="less" scoped>
.typeList {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}
</style>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import TypeItem from './TypeItem.vue'

export default defineComponent({
    components: {
        TypeItem,
    },
    setup() {
        let typeList = reactive([
            {
                imgUrl: require("@/assets/images/z_icon1.png"),
                title: '全屏直播',
            },
            {
                imgUrl: require("@/assets/images/z_icon2.png"),
                title: '英雄联盟',
            },
            {
                imgUrl: require("@/assets/images/z_icon3.png"),
                title: '王者荣耀',
            },
            {
                imgUrl: require("@/assets/images/z_icon4.png"),
                title: '娱乐',
            },
            {
                imgUrl: require("@/assets/images/z_icon5.png"),
                title: '单机游戏',
            },
            {
                imgUrl: require("@/assets/images/z_icon6.png"),
                title: '电台',
            },
            {
                imgUrl: require("@/assets/images/z_icon7.png"),
                title: '虚拟主播',
            },
            {
                imgUrl: require("@/assets/images/z_icon8.png"),
                title: 'CS:GO',
            },
            {
                imgUrl: require("@/assets/images/z_icon9.png"),
                title: '视频唱见',
            },
            {
                imgUrl: require("@/assets/images/z_icon10.png"),
                title: '全部标签',
            },
        ])
        return {
            typeList
        }
    },
})
</script>
