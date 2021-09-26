<template>
    <div class="navbar">
        <div class="navbarItem">
            <nav-bar-item :path="'Home'">
                <template v-slot:icon>
                    <Icon>
                        <Home />
                    </Icon>
                </template>
                <span class="title">首页</span>
            </nav-bar-item>
        </div>

        <div class="navbarItem">
            <nav-bar-item :path="'DynamicState'">
                <template v-slot:icon>
                    <Icon>
                        <Home />
                    </Icon>
                </template>
                <span class="title">动态</span>
            </nav-bar-item>
        </div>

        <div class="navbarItem mid">+</div>

        <div class="navbarItem">
            <nav-bar-item :path="'Shopping'">
                <template v-slot:icon>
                    <Icon>
                        <Home />
                    </Icon>
                </template>
                <span class="title">会员购</span>
            </nav-bar-item>
        </div>

        <div class="navbarItem">
            <nav-bar-item :path="'Mine'">
                <template v-slot:icon>
                    <Icon>
                        <Home />
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
import { Home } from '@vicons/carbon'
import { Icon } from '@vicons/utils'

export default defineComponent({
    components: {
        NavBarItem,
        Home,
        Icon
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
    background-color: skyblue;
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    justify-content: space-around;
    align-items: center;
}

.navbarItem {
    text-align: center;
}
.title {
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
