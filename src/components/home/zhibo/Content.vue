<template>
    <div class="zhiboContent">
        <div class="head">
            <Icon id="icon">
                <PlayFilled />
            </Icon>
            <span id="title">推荐直播</span>
        </div>
        <div class="zhiboList">
            <Card />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { PlayFilled } from '@vicons/carbon'
import { Icon } from '@vicons/utils'
import Card from './Card.vue'

export default defineComponent({
    components: {
        PlayFilled,
        Icon,
        Card
    },
    setup() {
        return {}
    },
})
</script>


<style lang="less" scoped>
.zhiboContent {
    width: 100%;

    .head {
        margin-bottom: 10px;

        #icon {
            color: pink;
            font-size: 20px;
            vertical-align: middle;
        }

        #title {
            margin-left: 5px;
            font-weight: 700;
            line-height: 20px;
        }
    }

    .zhiboList {
        width: 100%;
        display: flex;
        
    }
}
</style>