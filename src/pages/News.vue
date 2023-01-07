<template lang="">
    <main>
        <div class="container">
            <h1 class="title">The News</h1>
            <div class="search__news">
                <SearchTopNews :filter="filter" @optionSelectedSearch="filterSelectedNewNews"/>
            </div>
            <div class="search__news">
                <SearchExactNews :filter="filter" />
            </div>
            <NewsList v-if="show" :news="news"/>
            <div v-else="notShow">хуйпизда</div>
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
            filter: {
                category: ['Business', 'Entertainment', 'General', 'Health', 'Science', 'Sports', 'Technology'],
                country: ['US', 'RU', 'UA', 'GB'],
                sourse: [1, 2],
            },
            thisSearchCountry: '',
            thisSearchCategory: '',
            searchTop: true,
        }
    },
    methods: {
        mountedNewNews() {
            [this.thisSearchCountry, this.thisSearchCategory] = [this.filter.country[0], this.filter.category[0]]
            this.NewNews();
        },
        filterSelectedNewNews(country, category) {
            [this.thisSearchCountry, this.thisSearchCategory] = [country, category]
            this.NewNews();
        },
        NewNews() {
            this.show = false
            fetch(`${this.URL_TOP_NEWS}country=${this.thisSearchCountry}&category=${this.thisSearchCategory}&pageSize=100&${this.KEY__API}`)
            .then(response => {
                return response.json();
            })
            .then(this.new)
        },
        new(result) {
            this.news = result.articles;
            this.show = true

            if (result.articles == false) {
                this.notShow = true
            }
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
    },
    mounted() {
        if (this.searchTop) {
            this.mountedNewNews()
        }
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