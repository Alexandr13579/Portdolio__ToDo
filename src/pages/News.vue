<template lang="">
    <main>
        <div class="container">
            <h1 class="title">The News</h1>
            <button @click="NewNews">Click</button> 
            <FilterNews />
            <!-- <NewsList v-if="show" :news="news"/> -->
        </div>
    </main>
</template>

<script>
import NewsList from '@/components/News/NewsList.vue'
import FilterNews from '@/components/News/FilterNews.vue'

export default {
    data() {
        return {
            URL_NEWS: 'https://newsapi.org/v2/everything?',
            KEY__API: 'apiKey=2a75744890d847a39a0e4a5c69e74f9c',
            news: {},
            show: false,
            category: ['business', 'entertainment', 'general', 'health', 'science', 'sport', 'stechnology'],
            country: ['en', 'ru', ],
            sourse: [],
            q: '',
            
        }
    },
    methods: { 
        NewNews() {
            fetch(`https://newsapi.org/v2/top-headlines?q=trump&${this.category[1]}&${this.KEY__API}`)
            .then(response => {
                return response.json();
            })
            .then(this.new)
        },
        new(result) {
            this.news = result;
            this.show = true
            console.log(this.news)
        }
    },
    components: {
        NewsList, FilterNews
    }
}
</script>

<style lang="scss" scoped>
    main {
        background-color: azure;
        width: 100%;
        height: 100vh;
    }
    
    .title{
        margin-top: 20px;
        font-size: 30px;
        text-align: center;
    }
</style>