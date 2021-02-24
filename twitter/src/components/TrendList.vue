<template>
    <ul class="divide-y divide-gray-500 text-sm">
        <li 
            v-for="topic in trendingTopics" 
            :key="topic.headline"
            class="p-3"
        >
            <a href="#">
                <span class="text-gray-400">{{ topic.topic }} {{ typeof topic.timeAgo !== 'undefined' ? `${topic.timeAgo} hour ago` : 'Trending'}}</span>
                <h3 class="text-base leading-tight my-1"><strong>{{ topic.headline }}</strong></h3>
                <span class="text-gray-400">{{ topic.tweetCount }}K Tweets</span>
            </a>
        </li>
    </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface TrendingTopic {
    topic: string;
    headline: string;
    tweetCount: number;
    timeAgo?: number;
}

const trendingTopics: TrendingTopic[] = [
    {
        topic: 'Web Industry',
        headline: 'Thought-leader shares hot takes',
        tweetCount: 111.1,
        timeAgo: 1
    },
    {
        topic: 'Politics',
        headline: 'Something super political and divisive about the US',
        tweetCount: 42
    },
    {
        topic: 'Crypto',
        headline: 'Bitcoin up to $100k',
        tweetCount: 9000
    }
]

export default defineComponent({
    name: 'TrendList',
    data() {
        return {
            trendingTopics
        }
    },
})
</script>