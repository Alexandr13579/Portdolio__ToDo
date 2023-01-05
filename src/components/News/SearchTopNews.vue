<template>
    <div class="searchTop">
        <div class="searchTop__filter">
            <div class="filter__block" @mouseover="showCategpry = true" @mouseout="showCategpry = false">
                <p class="filter__block-select">Category: <span class="filter__block-selected">{{ category }}</span></p>
                <MySelectCustom 
                    :class="{show : showCategpry}" 
                    class="filter__block-filter" 
                    :options="filter.category"  
                    @optionSelected="optionSelectedCategory"
                />
                <span class="material-symbols-outlined">expand_more</span>            
            </div>
            <div class="filter__block" @mouseover="showCountry = true" @mouseout="showCountry = false">
                <p class="filter__block-select">Country: <span class="filter__block-selected">{{ country }}</span></p>
                <MySelectCustom
                    :class="{show : showCountry}"
                    class="filter__block-filter" 
                    :options="filter.country" 
                    @optionSelected="optionSelectedCountry"
                />
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
            showCategpry: false,
            showCountry: false,
        }
    },
    methods: {
        optionSelectedCategory(option) {
            this.category = option;
        },
        optionSelectedCountry(option) {
            this.country = option;
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
    cursor: pointer;

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
        font-weight: 400;
    }

    &__block-selected {
        font-size: inherit;
        font-weight: inherit;
    }

    &__block-filter {
    

    &.show{
        opacity: 1;
        visibility: visible;
        transform: translate(0px, 0px);
    }
  }
}




</style>