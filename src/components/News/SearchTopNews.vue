<template>
    <div class="searchTop">
        <div class="searchTop__block-filter">
            <div class="searchTop__select">
                <div class="select">
                    <h4 class="select__title">Category</h4>
                    <my-select :options="filter.category" @selectedOption="selectedCategory" />
                </div>
                <div class="select">
                    <h4 class="select__title">Country</h4>
                    <my-select :options="filter.country" @selectedOption="selectedCountry"/>
                </div>
                <my-btnSearhPush @click="searchTopNews" class="select__tbn">Search Top News</my-btnSearhPush>
            </div>
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
            country: this.filter.country[0]
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
    &__block-search {
        display: flex;
        align-items: center;
        min-height: 56px;
    }

    &__block-filter {
        display: flex;
        flex-wrap: wrap;
    }
    &__select{
        display: flex;
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 12px;
        .select{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 10px 20px;
            

            &__title{
                margin-bottom: 8px;
            }
        }
        .select__tbn{
            height: 100%;
        }
    }
}

</style>