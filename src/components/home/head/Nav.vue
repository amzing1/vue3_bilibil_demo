<template>
    <div class="homeNav">
        <div class="nav">
            <span
                class="navItem"
                v-for="(item, index) in menuOptions"
                :key="item.key"
                @click="changeNav(index)"
            >{{ item.label }}</span>
        </div>
        <div class="cur" :style="{ left: curStyle.left, width: curStyle.width }"></div>
    </div>
</template>

<style lang="less" scoped>
.homeNav {
    position: sticky;
    top: 0px;
    height: 33px;
    background-color: pink;
    z-index: 100;

    .nav {
        overflow: scroll;

        width: 100%;
        height: 30px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: #777;
    }

    .cur {
        width: 2em;
        height: 3px;
        background-color: green;
        position: absolute;
    }
}
</style>


<script lang="ts">
import { defineComponent, onMounted, reactive, ref, watchEffect } from 'vue'
import { useStore } from 'vuex';


const menuOptions = [
    {
        label: '直播',
        key: 'zhi-bo',
    },
    {
        label: '推荐',
        key: 'tui-jian',
    },
    {
        label: '热门',
        key: 're-men',
    },
    {
        label: '追番',
        key: 'zhui-fan',
    },
    {
        label: '影视',
        key: 'ying-shi'
    },
    {
        label: '建党百年',
        key: 'jian-dang'
    }
]

export default defineComponent({

    setup() {

        const store = useStore();
        let nav: HTMLElement;
        let curStyle = reactive({
            left: '20px',
            width: '2em'
        })

        function changeNav(index: number): void {
            store.commit('changeIndex', index);
        }

        watchEffect(() => {
            const cur = store.state.currentIndex;
            if (!nav) return;
            curStyle.left = (nav.children[cur] as HTMLElement).offsetLeft + 'px';
            curStyle.width = (nav.children[cur] as HTMLElement).offsetWidth + 'px';

        })

        onMounted(() => {
            nav = document.querySelector('.homeNav')?.querySelector('.nav') as HTMLElement;
            store.commit('changeIndex', 1);
        })


        return {
            curStyle,
            menuOptions: reactive(menuOptions),
            changeNav
        }
    },
})
</script>
