<template>
    <div class="remen">
        <Head />
        <RemenList />

    </div>
</template>

<style lang="less" scoped>

</style>

<script lang="ts">
import { defineComponent } from 'vue'

import Head from './Head.vue'
import RemenList from './RemenList.vue'

export default defineComponent({
    name: 'remen',
    components: {
        Head,
        RemenList
    },
    setup() {
        return {}
    },
})
</script>
