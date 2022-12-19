<template lang="">
    <main>
        <div class="container">
            <h1 class="title">The News</h1>
            <div class="search__news">
                <SearchTopNews :filter="filter"  />
                <SearchExactNews />
            </div>
            <my-btnSearhPush @click="NewNews">btn</my-btnSearhPush>
            <!-- <NewsList v-if="show" :news="news"/> -->
        </div>
    </main>
</template>

<script>
import NewsList from '@/components/News/NewsList.vue'
import FilterNews from '@/components/News/FilterNews.vue'
import SearchTopNews from '@/components/News/SearchTopNews.vue'
import SearchExactNews from '@/components/News/SearchExactNews.vue'


export default {
    data() {
        return {
            URL_NEWS: 'https://newsapi.org/v2/everything?',
            KEY__API: 'apiKey=2a75744890d847a39a0e4a5c69e74f9c',
            news: {},
            show: false,
            q: '',
            filter: {
                category: ['business', 'entertainment', 'general', 'health', 'science', 'sport', 'stechnology'],
                country: ['en', 'ru', ],
                sourse: [1, 2],
            }
        }
    },
    methods: { 
        NewNews() {
            fetch(`https://newsapi.org/v2/everything?q=bitcoin&${this.KEY__API}`)
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
        NewsList, FilterNews, SearchTopNews, SearchExactNews
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
        // text-align: center;
    }
    .search__news {
        margin: 20px 0px;
        padding: 10px 0px;
        border-top: 2px solid #CFD1E0;
        display: flex;
        justify-content: space-between;
    }
</style>