<template>
    <li class="font-bold text-xl tracking-wide mb-4" :class="{ 'text-red-600': active }">
        <a href="#" class="py-2 px-4 rounded-full hover:bg-gray-700 transition-colors duration-200">
            <div class="inline-block mr-8">
                <slot name="icon"></slot>
            </div>
            <slot></slot>
        </a>
    </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'NavItem',
    props: {
        active: {
            type: Boolean
        }
    }
})
</script>