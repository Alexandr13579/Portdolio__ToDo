<template lang="">
    <main>
        <div class="container">
            <h1 class="title">The TopNews</h1>
                <section class="search">
                    <div class="search__filter topNews">
                        <SearchTopNews v-if="isTopNews" :filter="filter" @optionSelectedSearch="NewNews"/>
                        <div v-else class="topNews__back" @click="backSearchTopNews">
                            <span class="material-symbols-outlined arrow">arrow_back_ios</span>
                            <p>Back to TopNews</p>
                        </div>
                    </div>
                    <div class="search__filter exactNews">
                        <my-btnSearhPush @click="showExatNews = true">
                            Search by word
                        </my-btnSearhPush>
                        <my-dialog :show="showExatNews">
                            <SearchExactNews :filter="filter" @searchExatNews="searchExatNews"/>
                        </my-dialog>
                    </div>
                </section>
            <NewsList v-if="show" :news="news"/>
            <my-LoadSpinner v-else />
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
            notShow: true,
            showExatNews: false,
            isTopNews: true,
            filter: {
                category: ['Business', 'General', 'Health', 'Science', 'Sports', 'Technology'],
                country: ['US', 'RU', 'UA', 'GB'],
                first: ['Relevancy', 'Popularity', 'PublishedAt']
            },
            thisSearchCountry: '',
            thisSearchCategory: '',
            searchTop: true,
        }
    },
    methods: {
        backSearchTopNews() {
            this.isTopNews = true;
            this.NewNews(this.filter.country[0], this.filter.category[0]);
        },
        NewNews(country, category) {
            this.show = false
            fetch(`${this.URL_TOP_NEWS}country=${country}&category=${category}&pageSize=100&${this.KEY__API}`)
            .then(response => {
                return response.json();
            })
            .then(this.new)
        },
        searchExatNews(keyWord, first) {
            this.show = false;
            this.showExatNews = false;
            this.isTopNews = false;
            fetch(`${this.URL_EXATCT_NEWS}q=${keyWord}&sortBy=${first}&pageSize=100&${this.KEY__API}`)
            .then(response => {
                return response.json();
            })
            .then(this.new)
        },
        new(result) {
            this.news = result.articles;
            setTimeout(() => {
                this.show = true
            }, 3000);

            if (result.articles == false) {
                this.notShow = true
            }
        },    
    },
    components: {
        NewsList, SearchTopNews, SearchExactNews
    },
    mounted() {
        if (this.searchTop) {
            this.NewNews(this.filter.country[0], this.filter.category[0])
        }
    }
    
}
</script>

<style lang="scss" scoped>
    main {
        width: 100%;
        height: 100%;
    }
    
    .title{
        margin: 20px 0px 5px 0px;
        padding: 10px 0px;
        font-size: 30px;
        border-bottom: 2px solid rgba(255,255,255, 0.9);
    }

    .search{
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 30px ;
        padding: 10px 0px;

    }

    .topNews{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .topNews__back{
        display: flex;
        align-items: center;
        
        font-size: 18px;
        font-weight: 400;
        
        cursor: pointer;
        transition: transform ease .3s;

        &:hover{
            transform: translate(-5px, 0px);

        }
    }

</style>