<template>
    <div>
        <button>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-chat w-6 h-6"><path class="primary" d="M2 15V5c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v15a1 1 0 0 1-1.7.7L16.58 17H4a2 2 0 0 1-2-2z"/><path class="secondary" d="M6 7h12a1 1 0 0 1 0 2H6a1 1 0 1 1 0-2zm0 4h8a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2z"/></svg>
            {{ tweet.replies || '' }}
        </button>
        <button @click="retweeted = !retweeted">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-refresh w-6 h-6"><circle cx="12" cy="12" r="10" class="primary"/><path class="secondary" d="M8.52 7.11a5.98 5.98 0 0 1 8.98 2.5 1 1 0 1 1-1.83.8 4 4 0 0 0-5.7-1.86l.74.74A1 1 0 0 1 10 11H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1.7-.7l.82.81zm5.51 8.34l-.74-.74A1 1 0 0 1 14 13h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1.7.7l-.82-.81A5.98 5.98 0 0 1 6.5 14.4a1 1 0 1 1 1.83-.8 4 4 0 0 0 5.7 1.85z"/></svg>
            {{ retweets || '' }}
        </button>
        <button @click="liked = !liked">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-heart w-6 h-6"><circle cx="12" cy="12" r="10" class="primary"/><path class="secondary" d="M12.88 8.88a3 3 0 1 1 4.24 4.24l-4.41 4.42a1 1 0 0 1-1.42 0l-4.41-4.42a3 3 0 1 1 4.24-4.24l.88.88.88-.88z"/></svg>
            {{ likes || '' }}
        </button>
        <button></button>
    </div>
</template>


<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Tweet } from '../tweets'

export default defineComponent({
    name: 'TweetInteractions',
    props: {
        tweet: {
            type: Object as PropType<Tweet>,
            required: true
        }
    },
    data() {
        return {
            liked: false,
            retweeted: false
        }
    },
    computed: {
        likes(): number | null {
            if (typeof this.tweet.likes === 'undefined')
                return null;

            return this.liked ? this.tweet.likes + 1 : this.tweet.likes;
        },
        retweets(): number | null {
            if (typeof this.tweet.likes === 'undefined')
                return null;

            return this.retweeted ? this.tweet.retweets + 1 : this.tweet.retweets;
        }
    }
})
</script>