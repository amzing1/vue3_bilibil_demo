<template>
    <div class="card">
        <div class="img">
            <div class="videoMess">
                <span>华哥无敌啊</span>
                <span class="duration">3:20</span>
            </div>
        </div>
        <p class="title">小问号，你是否有很多朋友？</p>
        <p class="descrption">
            英雄联盟
            <Icon class="close">
                <Close />
            </Icon>
        </p>
    </div>
</template>

<style lang="less" scoped>
.card {
    width: 49%;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px rgba(88, 88, 88, 0.1);
    margin-bottom: 6px;

    .img {
        width: 100%;
        height: 80px;
        background-image: url("../../../assets/images/four.png");
        background-size: 100% 100%;
        color: #fff;
        font-size: 12px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        position: relative;

        .videoMess {
            box-sizing: border-box;
            width: 100%;
            position: absolute;
            bottom: 2px;
            padding-left: 5px;

            .playCounts,
            .comment {
                margin-right: 2px;
                vertical-align: middle;
                font-size: 16px;
            }

            .comment {
                margin-left: 10px;
            }

            .duration {
                position: absolute;
                right: 6px;
            }
        }
    }

    .title {
        font-size: 14px;
        margin: 6px 10px;
        line-height: 18px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .descrption {
        font-size: 12px;
        margin: 6px 10px;
        color: #777;
        position: relative;

        .midIcon {
            vertical-align: middle;
            margin-right: 2px;
        }
        .close {
            position: absolute;
            right: 0px;
            bottom: 0;
        }
    }
}
</style>

<script lang="ts">
import { defineComponent } from 'vue'

import { Close } from "@vicons/carbon"
import { Icon } from '@vicons/utils'

export default defineComponent({
    components: {
        Icon,
        Close,
    },
    setup() {
        return {}
    },
})
</script>
