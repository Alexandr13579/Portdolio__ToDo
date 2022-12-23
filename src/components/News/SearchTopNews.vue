<template>
    <div class="searchTop">
        <div class="searchTop__block-filter">
            <select class="searchTop-select" v-model="country" name="country" id="country">
                <option disabled>Select country</option>
                <option
                @change=""
                class="searchTop-option" 
                v-for="item of filter.country"
                >{{ item }}</option>
            </select>
            <select class="searchTop-select"  v-model="category" name="category" id="category">
                <option disabled>Select category</option>
                <option 
                v-for="item of filter.category"
                class="searchTop-option" 
                >{{ item }}</option>
            </select>
            <!-- <select name="sourse" id="sourse">
                <option disabled>Select publisher</option>
                <option 
                v-for="item of filter.sourse"
                >{{ item }}</option>
            </select> -->
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
            country: 'Select country' ,
            category: 'Select category',
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