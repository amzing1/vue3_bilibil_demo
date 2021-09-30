<template>
    <div class="remenHead">
        <HeadItem :title="'排行榜'" :bg="'deepPink'">
            <template #icon>
                <Icon>
                    <IosPodium />
                </Icon>
            </template>
        </HeadItem>
        <HeadItem :title="'每周必看'" :bg="'rgb(240,210,20)'">
             <template #icon>
                <Icon>
                    <MdPaper />
                </Icon>
            </template>
        </HeadItem>
        <HeadItem :title="'入站必刷'" :bg="'orange'">
             <template #icon>
                <Icon>
                    <Medal />
                </Icon>
            </template>
        </HeadItem>
    </div>
</template>

<style lang="less" scoped>
.remenHead {
    display: flex;
    justify-content: space-around;
    padding: 10px 0;
}
</style>
<script lang="ts">
import { defineComponent } from 'vue'
import HeadItem from './HeadItem.vue'
import { Icon } from '@vicons/utils'
import { IosPodium, MdPaper } from '@vicons/ionicons4'
import { Medal } from '@vicons/fa'


export default defineComponent({
    components: {
        HeadItem,
        Icon,
        IosPodium,
        Medal,
        MdPaper
    },
    setup() {
        return {}
    },
})
</script>
