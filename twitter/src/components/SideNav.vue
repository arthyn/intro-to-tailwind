<template> 
    <nav>
        <ul>
            <nav-item :active="true">
                <template #icon>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-home"><path class="fill-current text-red-600" d="M9 22H5a1 1 0 0 1-1-1V11l8-8 8 8v10a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v4a1 1 0 0 1-1 1zm3-9a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/><path class="fill-current text-red-400" d="M12.01 4.42l-8.3 8.3a1 1 0 1 1-1.42-1.41l9.02-9.02a1 1 0 0 1 1.41 0l8.99 9.02a1 1 0 0 1-1.42 1.41l-8.28-8.3z"/></svg>
                </template>
                Home
            </nav-item>
            <nav-item>
                <template #icon>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-search"><circle cx="10" cy="10" r="7" class="fill-current text-gray-50"/><path class="fill-current text-gray-400" d="M16.32 14.9l1.1 1.1c.4-.02.83.13 1.14.44l3 3a1.5 1.5 0 0 1-2.12 2.12l-3-3a1.5 1.5 0 0 1-.44-1.14l-1.1-1.1a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>
                </template>
                Explore
            </nav-item>
            <nav-item>
                <template #icon>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-notification"><circle cx="12" cy="19" r="3" class="fill-current text-gray-400"/><path class="fill-current text-gray-50" d="M10.02 4.28L10 4a2 2 0 1 1 3.98.28A7 7 0 0 1 19 11v5a1 1 0 0 0 1 1 1 1 0 0 1 0 2H4a1 1 0 0 1 0-2 1 1 0 0 0 1-1v-5a7 7 0 0 1 5.02-6.72z"/></svg>
                </template>
                Notifications
            </nav-item>
            <nav-item>
                <template #icon>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-user"><path class="fill-current text-gray-50" d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"/><path class="fill-current text-gray-400" d="M21 20v-1a5 5 0 0 0-5-5H8a5 5 0 0 0-5 5v1c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2z"/></svg>
                </template>
                Profile
            </nav-item>
        </ul>
    </nav>
    <t-button class="w-full">Tweet</t-button>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import NavItem from './NavItem.vue'
import TButton from './TButton.vue'

export default defineComponent({
    name: 'SideNav',
    components: {
        NavItem,
        TButton
    }
})
</script>