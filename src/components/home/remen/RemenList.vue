<template>
    <div class="remenList">
        <RemenItem />
        <RemenItem />
        <RemenItem />
        <RemenItem />
        <RemenItem />
        <RemenItem />
        <RemenItem />
        <RemenItem />
        <RemenItem />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import RemenItem from './RemenItem.vue'

export default defineComponent({
    components: {
        RemenItem
    },
    setup() {
        return {}
    },
})
</script>
