<template>
    <div class="filter" @mouseover="isShow = true" @mouseout="isShow = false">
        <p class="filter__select">Category: <span class="filter__selected">{{ category }}</span></p>
        <div class="filter__list-wrapper"  :class="{show : isShow}">
            <ul class="filter__list">
                <my-OptionCustom
                    class="filter__item"
                    v-for="option of options"  
                    :option="option"
                    @optionSelected="optionSelected"
                />
            </ul>
        </div>
        <span :class="{show: isShow}" class="material-symbols-outlined">expand_more</span>            
    </div>
   
</template>

<script>
export default {
    name: 'my-SelectCustom',
    props: {
        options: {
            type: Array,
            required: true
        },
    },
    data() {
        return {
            selected: '',
            isShow: false,
            category: this.options[0]
        }
    },
    methods: {
        optionSelected(option) {
            this.category = option
            this.$emit('optionSelected', option);
        }
    }
}
</script>

<style lang="scss" scoped>
.filter {
    position: relative;
    background-color: #333333;
    cursor: pointer;

    height: 50px;
    padding: 10px;
    border-radius: 12px;
    margin-right: 7px;

    display: flex;
    align-items: center;

    &__select {
        font-size: 18px;
        font-weight: 400;
        white-space: nowrap;    
    }
    &__selected {
        font-size: inherit;
        font-weight: inherit;
    }
    &__list-wrapper {
        width: 100%;
        margin-top: -20px;

        position: absolute;
        left: 0;
        top: 55px;
        z-index: 99;

        transform: translate(0px, -10px);

        opacity: 0;
        visibility: hidden;
        transition: all ease .3s;

        &.show{
        opacity: 1;
        visibility: visible;
        transform: translate(0px, 0px);
        }
    }
    &__list {
        background-color: #333333;

        font-size: 18px;
        font-weight: 400;

        margin-top: 20px;
        width: 100%;
        padding: 10px;
        border-radius: 12px;
    }

    span {
        transition: transform ease .3s;

        &.show {
            transform: rotate(180deg);
        }
    }
}
</style>