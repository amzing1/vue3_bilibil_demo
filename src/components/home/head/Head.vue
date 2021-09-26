<template>
    <div class="homeHead">
        <n-avatar round size="large" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"></n-avatar>
        <div class="search">
            <Icon class="searchIcon"><Search /></Icon>
        </div>
        <Icon><GameConsole /></Icon>
        <Icon><Email /></Icon>
    </div>
    
</template>

<style lang="less" scoped>
.homeHead {
    width: 100%;
    height: 50px;
    background-color:skyblue;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 20px;
    color: #777;

    .search {
        width: 200px;
        height: 30px;
        background-color: #fff;
        border-radius: 20px;

        .searchIcon {
            font-size: 16px;
            padding-left: 10px;
        }
    }
}
</style>

<script lang="ts">
import { defineComponent } from 'vue'
import { NAvatar } from 'naive-ui'
import { GameConsole, Email, Search } from '@vicons/carbon'
import { Icon } from '@vicons/utils'

export default defineComponent({
    name: 'Head',
    components: {
        NAvatar,
        Icon,
        GameConsole,
        Email,
        Search,
        
    },
    setup() {
        return {}
    },
})
</script>


