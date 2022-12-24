<template>
    <div class="searchTop">
        <div class="searchTop__block-filter">
            <my-select :options="filter.category" :name="Object.keys(this.filter)[0]" />
            <my-btnSearhPush @click="nameaO" class="choice-search__btn">Search Top News</my-btnSearhPush>
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
        }
    },
    methods: {
        nameaO() {
            console.log(Object.keys(this.filter)[0])
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
    &__input {
        font-size: 20px;
        padding: 16px;
        background-color: #CFD1E0;
        border-radius: 12px 0px 0px 12px;
        min-height: 56px;
    }
    &__block-filter {
        display: flex;
        flex-wrap: wrap;

        .searchTop-select{
            width: 200px;
            background-color: rgba(227, 227, 227, 0.412);
            padding: 10px;
            border-radius: 12px;

            &:not(:last-child) {
                margin-right: 10px;
            }

            &.searchTop-option{
                padding: 10px 0px;
                margin: 10px 0px;

                &:hover{
                    background-color: #394C60;
                }
            }
        }
    }
    &__btn {
        display: flex;
        align-items: center;
        border-radius: 0px 12px 12px 0px;
    }
    &__btn-text {
        margin-right: 5px;
    }
}

</style>