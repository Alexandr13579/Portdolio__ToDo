<template>
    <div class="searchTop">
        <h3 class="searchTop__title">Top News</h3>
        <div class="searchTop__block-search">
            <input class="searchTop__input" type="text" />
            <my-btnSearhPush @click="sear">Search</my-btnSearhPush>
        </div>
        <div class="searchTop__block-filter">
            <select name="country" id="country">
                <option 
                v-for="item of filter.country"
                value=""
                >{{ item }}</option>
            </select>
            <select name="category" id="category">
                <option 
                v-for="item of filter.category"
                value=""
                >{{ item }}</option>
            </select>
            <select name="sourse" id="sourse">
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

<style lang="">
    
</style>