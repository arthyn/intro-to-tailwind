<template>
    <form class="flex" @submit.prevent="submit">
        <img src="/src/assets/avatar.jpg" class="flex-none w-14 h-14 rounded-full"/>
        <div class="flex-1 flex flex-col items-end ml-4">
            <textarea 
                class="block resize-none w-full h-24 mb-4 bg-transparent" 
                name="tweet" 
                placeholder="What's happening?"
                v-model="text"
            ></textarea>
            <t-button>Tweet</t-button>
        </div>
    </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TButton from './TButton.vue'

export default defineComponent({
    name: 'TweetBox',
    components: {TButton},
    props: {
        addTweet: {
            type: Function,
            required: true
        }
    },
    data() {
        return {
            text: ''
        }
    },
    methods: {
        submit(): void {
            this.addTweet(this.text)
            this.text = ''
        }
    }
})
</script>