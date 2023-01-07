<template>
    <div class="filter" @mouseover="isShow = true" @mouseout="isShow = false">
        <p class="filter__select">Category: <span class="filter__selected">{{ category }}</span></p>
        <div class="filter__list-wrapper"  :class="{show : isShow}">
            <ul class="filter__list">
                <MyOptionCustom
                    class="filter__item"
                    v-for="option of options"  
                    :option="option"
                    @optionSelected="optionSelected"
                />
            </ul>
        </div>
        <span class="material-symbols-outlined">expand_more</span>            
    </div>
   
</template>

<script>
export default {
    name: 'MySelectCustom',
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

    background-color: rgba(0, 0, 0, 0.3);
    cursor: pointer;

    height: 50px;
    padding: 10px;
    border-radius: 12px;
    margin-right: 7px;

    display: flex;
    justify-content: center;
    align-items: center;

    &__select {
        font-size: 18px;
        font-weight: 400;
    }
    &__selected {
        font-size: inherit;
        font-weight: inherit;
    }
    &__list-wrapper {
        width: 100%;
        margin-top: -20px;

        position: absolute;
        z-index: 99;
        top: 55px;
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
        background-color: rgba(0, 0, 0, 0.5);

        font-size: 18px;
        font-weight: 400;

        margin-top: 20px;
        width: 100%;
        padding: 10px;
        border-radius: 12px;
    }
    &__item {}
}
.material-symbols-outlined {
}
</style>