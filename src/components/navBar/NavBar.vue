<template>
    <div class="navbar">
        <div class="navbarItem currentRoute">
            <nav-bar-item :path="'Home'">
                <template v-slot:icon>
                    <Icon class="icon-big">
                        <Home />
                    </Icon>
                </template>
                <span class="title">首页</span>
            </nav-bar-item>
        </div>

        <div class="navbarItem">
            <nav-bar-item :path="'DynamicState'">
                <template v-slot:icon>
                    <Icon class="icon-big">
                        <Windmill />
                    </Icon>
                </template>
                <span class="title">动态</span>
            </nav-bar-item>
        </div>

        <div class="navbarItem mid">+</div>

        <div class="navbarItem">
            <nav-bar-item :path="'Shopping'">
                <template v-slot:icon>
                    <Icon class="icon-big">
                        <ShoppingBag />
                    </Icon>
                </template>
                <span class="title">会员购</span>
            </nav-bar-item>
        </div>

        <div class="navbarItem">
            <nav-bar-item :path="'Mine'">
                <template v-slot:icon>
                    <Icon class="icon-big">
                        <BeeBat />
                    </Icon>
                </template>
                <span class="title">我的</span>
            </nav-bar-item>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBarItem from './NavBarItem.vue'
import { Home, ShoppingBag, BeeBat } from '@vicons/carbon'
import { Icon } from '@vicons/utils'
import { Windmill } from '@vicons/tabler'

export default defineComponent({
    components: {
        NavBarItem,
        Home,
        Icon,
        Windmill,
        ShoppingBag,
        BeeBat
    },
    setup() {
        return {}
    },
})
</script>

<style lang="less" scoped>
.navbar {
    width: 100%;
    height: 6%;
    background-color: #fff;
    color: #666;
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    justify-content: space-around;
    align-items: center;
    z-index: 100;
}

.navbarItem {
    text-align: center;
    line-height: 1.3;

    .icon-big {
        font-size: 20px;
    }
}

.currentRoute {
    color: deeppink;
}
.title {
    display: block;
    font-size: 12px;
}

.mid {
    width: 40px;
    height: 40px;
    border-radius: 15px;
    background-color: deeppink;
    color: #fff;
    font-size: 20px;
    line-height: 40px;
}
</style>
