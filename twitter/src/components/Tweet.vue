<template>
  <article>
      <img :src="tweet.user.avatar" width="56" height="56" />
      <header>
          <strong>{{ tweet.user.displayName }}</strong>
          <span>@{{ tweet.user.username }} · {{ displayDuration }}</span>
      </header>
      <p>{{ tweet.text }}</p>
      <tweet-interactions :tweet="tweet" />
  </article>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { intervalToDuration, format } from 'date-fns'
import { Tweet } from '../tweets'
import TweetInteractions from './TweetInteractions.vue'

export default defineComponent({
  components: { TweetInteractions },
    name: 'Tweet',
    props: {
        tweet: {
            type: Object as PropType<Tweet>,
            required: true
        }
    },
    data() {
        return {
            duration: intervalToDuration({
                start: this.tweet.timeAgo,
                end: Date.now()
            })
        }
    },
    computed: {
        displayDuration(): string {
            if (this.duration.days && this.duration.days > 0)
                return format(this.tweet.timeAgo, 'MMM d')

            if (this.duration.hours && this.duration.hours > 0)
                return `${this.duration.hours} hrs`

            return `${this.duration.minutes} m`
        }
    }
})
</script>