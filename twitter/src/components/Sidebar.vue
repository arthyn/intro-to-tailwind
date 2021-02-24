<template>
    <div class="bg-gray-800 rounded-lg">
        <h2 class="text-2xl p-3 border-b border-gray-500"><strong>What's happening</strong></h2>
        <trend-list />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TrendList from './TrendList.vue'

export default defineComponent({
    name: 'Sidebar',
    components: {
        TrendList
    }
})
</script>