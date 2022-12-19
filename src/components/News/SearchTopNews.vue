<template>
    <div class="searchTop">
        <h3 class="searchTop__title">Top News</h3>
        <div class="searchTop__block-search">
            <input class="searchTop__input" type="text" />
            <my-btnSearhPush class="searchTop__btn">
                <span class="searchTop__btn-text">Search</span> 
                <span class="material-symbols-outlined searchTop__btn-img">search</span>
            </my-btnSearhPush>
        </div>
        <div class="searchTop__block-filter">
            <select name="country" id="country">
                <option value="">Select country</option>
                <option 
                v-for="item of filter.country"
                value=""
                >{{ item }}</option>
            </select>
            <select name="category" id="category">
                <option value="">Select category</option>
                <option 
                v-for="item of filter.category"
                value=""
                >{{ item }}</option>
            </select>
            <select name="sourse" id="sourse">
                <option value="">Select publisher</option>
                <option 
                v-for="item of filter.sourse"
                value=""
                >{{ item }}</option>
            </select>
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
    methods: {
        sear() {
            console.log(this.filter)
        }
    }
}
</script>

<style lang="scss" scoped>
.searchTop {
    &__title {
        font-size: 24px;
        font-weight: 500;
        margin-bottom: 10px;
    }
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
    &__block-filter {}
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