<template>
    <div class="searchExat">
        <h3 class="searchExat__title">Search News by keyword for all time</h3>
        <div class="searchExat__block">
            <input class="searchExat__input" type="text" placeholder="Enter keyword" />
            <my-btnSearhPush class="searchExat__btn">
                <span class="searchExat__btn-text">Search</span> 
                <span class="material-symbols-outlined searchExat__btn-img">search</span>
            </my-btnSearhPush>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.searchExat {
    margin: 20px 0px;
    padding: 10px 0px;
    border-top: 2px solid #CFD1E0;
    border-bottom: 2px solid #CFD1E0;

    &__title {
        font-size: 24px;
        font-weight: 500;
        margin-bottom: 10px;
    }

    &__block{
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
    &__btn {
        display: flex;
        align-items: center;
        border-radius: 0px 12px 12px 0px;
    }
    &__btn-text {
        margin-right: 5px;
    }
    &__btn-img {
        
    }
}
</style>