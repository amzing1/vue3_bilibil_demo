<template>
    <div class="mainContent">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card :isBig="true"/>
        <Card />
        <Card />
    </div>
</template>

<style lang="less" scoped>

.mainContent {
    width: 100%;
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue'

import Card from './Card.vue'

export default defineComponent({
    components: {
        Card,
    },
    setup() {
        return {}
    },
})
</script>

