<template>
    <div class="searchTop">
        <div class="searchTop__filter">
            <div class="filter__block">
                <p class="filter__block-select" @mouseover="showCategpry = true" @mouseout="showCategpry = false">Category: <span class="filter__block-selected">Bisness</span></p>
                <MySelectCustom :class="{show : showCategpry}" class="filter__block-filter" :options="filter.category" />
            </div>
            <div class="filter__block">
                <p class="filter__block-select">Country: <span class="filter__block-selected">US</span></p>
                <MySelectCustom class="filter__block-filter" :options="filter.country" />
            </div>
            <my-btnSearhPush @click="searchTopNews" >Search Top News</my-btnSearhPush>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        filter: Object,
        required: true
    },
    data() {
        return {
            category: this.filter.category[0],
            country: this.filter.country[0],
            showCategpry: false
        }
    },
    methods: {
        selectedCategory(selected) {
            this.category = selected;
        },
        selectedCountry(selected) {
            this.country = selected;
        },
        searchTopNews() {
            this.$emit('searchTopNews', this.category, this.country)
        }
    }
}
</script>

<style lang="scss" scoped>
.searchTop {
    &__filter {
    display: flex;
    }
}
.filter {
    &__block {
    position: relative;
    background-color: rgba(0, 0, 0, 0.3);

    height: 50px;
    padding: 10px;
    border-radius: 12px;
    margin-right: 7px;

    display: flex;
    justify-content: center;
    align-items: center;
}
    &__block-select {
        font-size: 18px;
        font-weight: 500;
    }
    &__block-selected {}

    &__block-filter {
    position: absolute;
    top: 50px;
    // opacity: 0;
    // visibility: hidden;


    &.show{
        opacity: 1;
        visibility: visible;
    }
  }
}




</style>