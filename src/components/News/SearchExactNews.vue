<template>
    <div class="searchExat">
        <div class="searchExat__search">
            <input v-model="keyWord" class="searchExat__input" type="text" placeholder="Enter keyword" />
            <my-btnSearhPush @click="searchExatNews" type="submit" class="searchExat__btn">
                <span class="searchExat__btn-text">Search</span> 
                <span class="material-symbols-outlined searchExat__btn-img">search</span>
            </my-btnSearhPush>
        </div>
        <div class="searchExat__filter">
            <my-SelectCustom :options="filter.first" @optionSelected="optionSelectedCategory"/>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        filter: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            keyWord: '',
            first: this.filter.first[0],
        }
    },
    methods: {
        optionSelectedCategory(option) {
            this.first = option;
        },
        searchExatNews() {
            this.$emit('searchExatNews', this.keyWord, this.first)
            console.log( this.keyWord, this.first)
        }
    }
}
</script>

<style lang="scss" scoped>
.searchExat {

    &__search {
        display: flex;
        margin-bottom: 10px;
    }
    
    &__input {
        font-size: 20px;
        padding: 16px;
        background-color: #333333;
        color: inherit;
        border-radius: 12px 0px 0px 12px;
        min-height: 56px;

    }
    &__btn {
        display: flex;
        align-items: center;
        border-radius: 0px 12px 12px 0px;
    }
    &__btn-text {
        margin-right: 5px;
    }

    &__filter {
        display: flex;
    }
}
</style>