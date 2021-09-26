<template>
    <div class="navbarItem" @click="toThisView" >
        <slot name="icon"></slot><br>
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

        function toThisView(): void {
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
