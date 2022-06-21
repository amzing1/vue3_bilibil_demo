<template>
    <div class="navbarItem" @click="toThisView" >
        <slot name="icon"></slot>
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router';


export default defineComponent({
    
    props: {
        path: String
    },
    setup(props) {
        const router = useRouter();

        function toThisView(event: MouseEvent): void {
            const oldRouteElem = document.querySelector('.currentRoute') as HTMLElement;
            oldRouteElem.classList.remove('currentRoute');
            const curRouteElem = (event.currentTarget as HTMLElement).parentNode as HTMLElement;
            curRouteElem.classList.add('currentRoute');
            router.push({
                name: props.path
            })
        }
        return {
            toThisView
        }
    },
})
</script>

<style lang="less" scoped>
.navbarItem {
    height: 80%;
}
</style>
