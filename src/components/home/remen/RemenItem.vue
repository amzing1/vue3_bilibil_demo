<template>
    <div class="remenItem">
        <div class="left">
            <span class="duration">6:11</span>
        </div>
        <div class="right">
            <div class="title ellipsis_two">我遭受了一场无法抵抗的网络暴力</div>
            <span class="label">百万播放</span><br>
            <span class="name">
                <Icon class="iconMid">
                    <Bat />
                </Icon>
                英雄联盟
            </span><br>
            <span class="mess">
                <Icon>
                    <PlayOutline />
                </Icon>
                <span class="ellipsis_one detail"> 42.4万人观看 . 18小时前哈哈哈哈哈哈哈哈哈哈哈哈</span>
                <Icon class="menu">
                    <OverflowMenuVertical />
                </Icon>
            </span>
        </div>
    </div>
</template>

<style lang="less" scoped>
.remenItem {
    box-sizing: border-box;
    width: 100%;
    height: 110px;
    padding: 10px 0;
    box-shadow: 0 .5px #ccc;
    display: flex;
    justify-content: space-between;

    .left {
        width: 49%;
        height: 100%;
        background-color: green;
        border-radius: 5px;
        position: relative;

        background-image: url('~@/assets/images/remen_1.png');
        .duration {
            position: absolute;
            right: 5px;
            bottom: 5px;
            color: #eee;
            font-size: 12px;
            background-color: rgba(10,10,10,.3);
            padding: 0 2px;
        }
    }

    .right {
        width: 49%;
        height: 100%;
        line-height: 1.2;
        color: #777;
        font-size: 12px;

        .title {
            color: #111;
            font-size: 14px;
        }

        .label {
            display: inline-block;
            border: 1px solid rgb(245, 165, 17);
            color: hsla(34, 100%, 50%, 0.884);
            padding: 1px 2px;
            margin: 2px 0;
        }

        .name {
            display: inline-block;
            margin: 2px 0;
        }

        .mess {
            margin: 2px 0;
            .detail {
                padding-left: 3px;
                display: inline-block;
                width: 70%;
            }

            .menu {
                float: right;
            }
        }
    }
}
</style>

<script lang="ts">
import { defineComponent } from 'vue'
import { Icon } from '@vicons/utils'
import { Bat, PlayOutline, OverflowMenuVertical } from '@vicons/carbon'

export default defineComponent({
    components: {
        Icon,
        Bat,
        PlayOutline,
        OverflowMenuVertical
    },
    setup() {
        return {};
    },
})
</script>
