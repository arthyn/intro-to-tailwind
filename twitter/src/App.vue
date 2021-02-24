<template>
  <section class="grid grid-cols-12 gap-6 max-w-6xl mx-auto p-4 md:p-12">
    <aside class="hidden sm:block col-span-3">
      <side-nav />
    </aside>
    <main class="col-span-6">
      <h1 class="text-2xl mb-6"><strong>Latest Tweets</strong></h1>
      <tweet-box :addTweet="addTweet"/>
      <hr class="my-4">
      <transition-group name="tweets" enter-from-class="transform -translate-x-12">
        <tweet v-for="item in tweets" :tweet="item" :key="item.id" class="transition-all"/>
      </transition-group>
    </main>
    <aside class="hidden sm:block col-span-3">
      <sidebar />
    </aside>
  </section>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import tweets, { hunter } from './tweets'
import Sidebar from './components/Sidebar.vue'
import SideNav from './components/SideNav.vue'
import TweetBox from './components/TweetBox.vue'
import Tweet from './components/Tweet.vue'

export default defineComponent({
  name: 'App',
  components: {
    Sidebar,
    SideNav,
    TweetBox,
    Tweet
  },
  props: {
  },
  data() {
    return {
      tweets: tweets()
    }
  },
  methods: {
    addTweet(tweet: string) {
      this.tweets.unshift({
        id: this.tweets.length + 1,
        user: hunter,
        text: tweet,
        likes: 1,
        retweets: 1,
        timeAgo: Date.now()
      })
    }
  }
})
</script>