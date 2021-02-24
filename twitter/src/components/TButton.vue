<template>
    <button class="inline-flex items-center justify-center px-3 py-2 font-bold text-white bg-red-600 hover:bg-red-400 rounded-full">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'TButton',
}
</script>