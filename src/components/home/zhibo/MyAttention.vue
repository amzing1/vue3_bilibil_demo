<template>
<div class="attention">
    <div class="head">
        <span id="text1">我的关注</span>
        <span id="text2">3人正在直播</span>
        <span id="text3">查看全部
            <Icon id="icon">
                <ChevronRight />
            </Icon>
        </span>
    </div>
    <div class="attentionList">
        <div class="attentionItem" v-for="item in zhiboList" :key=item.id>
            <img :src="item.imgUrl" class="img">
            <span class="name">{{item.name}}</span>
        </div>
    </div>
</div>
</template>

<style lang="less" scoped>
.attention {
    box-sizing: border-box;
    width: 100%;
    border-radius: 5px;
    position: relative;
    padding: 10px 5px;
    background-color: #fff;
    margin-bottom: 10px;

    #text1 {
        font-weight: 700;
    }

    #text2 {
        color: #777;
        margin-left: 5px;
    }

    #text3 {
        color: #777;
        position: absolute;
        right: 5px;
        
        #icon {
            vertical-align:text-bottom;
            font-size: 18px;
        }
    }

    .attentionList {
        display: flex;
        justify-content: start;
        margin-top: 10px;
        .attentionItem {
            width: 20%;
            height: 80px;
            text-align: center;

            .img {
                display: block;
                width: 50px;
                height: 50px;
                margin: 0 auto;
                border-radius: 50%;
                border: 2px solid deeppink;
            }

            .name {
                font-size: 12px;
                color:#777;
            }
        }
    }
    

}
</style>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

import { ChevronRight } from '@vicons/carbon'
import { Icon } from '@vicons/utils'

export default defineComponent({
    components: {
        ChevronRight,
        Icon
    },
    setup() {

        let zhiboList = reactive([
            {
                imgUrl: require('@/assets/images/z_head1.png'),
                name: '央视新闻',
                id: 1234
            },
            {
                imgUrl: require('@/assets/images/z_head2.png'),
                name: '无语子',
                id: 12344
            },
            {
                imgUrl: require('@/assets/images/z_head3.png'),
                name: '绝绝子',
                id: 12345
            }
        ])
        return {
            zhiboList
        }
    },
})
</script>
