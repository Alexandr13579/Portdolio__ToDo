<template>
    <div class="searchTop" >
        <div class="searchTop__filter">
            <my-SelectCustom 
            :options="filter.category" 
            id="category"
            @optionSelected="optionSelectedCategory"
            />
            <my-SelectCustom 
            :options="filter.country"  
            @optionSelected="optionSelectedCountry"
            />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        filter: Object,
    },
    data() {
        return {
            category: this.filter.category[0],
            country: this.filter.country[0]
        }
    },
    methods: {
        optionSelectedCategory(option) {
            this.category = option;
            this.optionSelectedSearch();
        },
        optionSelectedCountry(option) {
            this.country = option;
            this.optionSelectedSearch();
        },
        optionSelectedSearch() {
            this.$emit('optionSelectedSearch', this.country, this.category);
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

#category{
    min-width: 240px;
}

</style>