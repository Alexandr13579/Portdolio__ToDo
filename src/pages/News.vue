<template lang="">
    <main>
        <div class="container">
            <h1 class="title">The News</h1>
            <div class="search__news">
                <SearchTopNews  :filter="filter" @searchTopNews="NewNews"  />
            </div>
            <div class="search__news">
                
            </div>
            <NewsList v-if="show" :news="news"/>
            <div v-else class="else">edfef</div>
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
            news: [],
            show: false,
            searchNews: '',
            thisSearchCountry: 'us',
            thisSearchCategory: 'business',
            filter: {
                category: ['business', 'entertainment', 'general', 'health', 'science', 'sport',],
                country: ['us', 'ru', 'ua', 'gb'],
                sourse: [1, 2],
            }
        }
    },
    methods: {
        NewNews(category, country) {
            this.show = false
            fetch(`${this.URL_TOP_NEWS}country=${country}&category=${category}&pageSize=100&${this.KEY__API}`)
            .then(response => {
                return response.json();
            })
            .then(this.new)
        },
        new(result) {
            this.news = result.articles;
            this.show = true
            console.log(this.news)
        },    

        searchNewsKeyWord(keyWord) {
            fetch(`${this.URL_EXATCT_NEWS}q=${keyWord}&pageSize=100&${this.KEY__API}`)
            .then(response => {
                return response.json();
            })
            .then(this.new)
        },
    },
    components: {
        NewsList, SearchTopNews, SearchExactNews
    }
}
</script>

<style lang="scss" scoped>
    main {
        background-color: #CFD1E0;
        width: 100%;
        height: 100%;
    }
    
    .title{
        margin: 20px 0px;
        padding: 10px 0px;
        font-size: 30px;
        border-bottom: 2px solid rgba(0, 0, 0, 0.3);
    }

</style>