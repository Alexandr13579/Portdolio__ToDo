<template lang="">
    <main>
        <div class="container">
            <h1 class="title">The News</h1>
            <div class="search__news">
                <SearchTopNews :filter="filter"  />
            </div>
            <div class="search__news">
                
            </div>
            <my-btnSearhPush @click="NewNews">btn</my-btnSearhPush>
            <NewsList v-if="show" :news="news"/>
        </div>
    </main>
</template>

<script>
import NewsList from '@/components/News/NewsList.vue'
import SearchTopNews from '@/components/News/SearchTopNews.vue'
import SearchExactNews from '@/components/News/SearchExactNews.vue'

export default {
    data() {
        return {
            URL_EXATCT_NEWS: 'https://newsapi.org/v2/everything?',
            URL_TOP_NEWS: 'https://newsapi.org/v2/top-headlines?',
            KEY__API: 'apiKey=2a75744890d847a39a0e4a5c69e74f9c',
            news: {},
            show: false,
            searchNews: '',
            filter: {
                category: ['business', 'entertainment', 'general', 'health', 'science', 'sport', 'stechnology'],
                country: ['ua', 'ru', 'us', 'gb'],
                sourse: [1, 2],
            }
        }
    },
    methods: { 
        NewNews(country, category) {
            fetch(`${this.URL_TOP_NEWS}country=${this.filter.country[2]}&category=${this.filter.category[1]}&pageSize=100&${this.KEY__API}`)
            .then(response => {
                return response.json();
            })
            .then(this.new)
        },
        searchNewsKeyWord(keyWord) {
            fetch(`${this.URL_EXATCT_NEWS}q=${keyWord}&pageSize=100&${this.KEY__API}`)
            .then(response => {
                return response.json();
            })
            .then(this.new)
        },
        new(result) {
            this.news = result.articles;
            this.show = true
            console.log(this.news)
        }
    },
    components: {
        NewsList, SearchTopNews, SearchExactNews
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
        margin: 20px 0px;
        padding: 10px 0px;
        font-size: 30px;
        border-bottom: 2px solid #CFD1E0;
        // text-align: center;
    }
    .choice-search{
        display: flex;
        gap: 8px;
    }
    .search__news {
        margin: 20px 0px;
        padding: 10px 0px;
        display: flex;
    }
</style>