<template lang="">
    <ul class="list">
        <NewsItem 
        v-for="item in news"
        :key="item.id"
        :item="item"/>
    </ul>
</template>

<script>
import NewsItem from './NewsItem.vue';
export default {
    props: {
        news: {
            type: Array,
            required: true,
        }
    },
    components: {
        NewsItem
    }
}
</script>

<style lang="scss" scoped>
    .list{
        max-width: 600px;
    }
</style>