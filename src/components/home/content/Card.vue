<template>
    <div class="card" :style="dynamicWidth">
        <div class="img" :style="dynamicHeight">
            <div class="videoMess">
                <Icon class="playCounts">
                    <PlayOutline />
                </Icon>
                <span>7777</span>
                <Icon class="comment">
                    <Stop />
                </Icon>
                <span>9527</span>

                <span class="duration">3:20</span>
            </div>
        </div>
        <p class="title">小问号，你是否有很多朋友？</p>
        <p class="descrption">
            <Icon class="midIcon">
                <CrossReference />
            </Icon>这个杀手爱摸鱼
            <Icon class="menu">
                <OverflowMenuVertical />
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
        height: 108px;
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
        .menu {
            position: absolute;
            right: 0px;
            top: 2px;
        }
    }
}
</style>

<script lang="ts">
import { computed, defineComponent } from 'vue'

import { CrossReference, OverflowMenuVertical, PlayOutline, Stop } from "@vicons/carbon"
import { Icon } from '@vicons/utils'

export default defineComponent({
    components: {
        Icon,
        CrossReference,
        OverflowMenuVertical,
        PlayOutline,
        Stop
    },
    props: {
        isBig: Boolean,
    },
    setup(props) {

        let dynamicWidth = computed(() => {
            if(props.isBig) {
                return {
                    width: '100%',
                }
            }
            return {}
        })

        let dynamicHeight = computed(() => {
            if(props.isBig) {
                return {
                    height: "150px",
                }
            }
            return {}
        })
        return {
            dynamicWidth,
            dynamicHeight
        }
    },
})
</script>
