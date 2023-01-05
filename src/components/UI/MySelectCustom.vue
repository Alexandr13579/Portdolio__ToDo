<template>
    <div class="wrapper__list">
        <ul @click="selectedOption" class="select__list">
            <MyOptionCustom 
                v-for="option of options"  
                :option="option" 
                @optionSelected="$emit('optionSelected' , option)" 
            />
        </ul>
    </div>
</template>

<script>
export default {
    name: 'MySelectCustom',
    props: {
        options: {
            type: Array,
        },
    },
    data() {
        return {
            selected: '',
        }
    },
    methods: {
        selectedOption() {
            this.$emit('selectedOption', this.selected)
        },
        chek(event) {
            this.select = event.target.value
        }
    }
}
</script>

<style lang="scss" scoped>

.select__list{
    background-color: rgba(0, 0, 0, 0.5);

    font-size: 18px;
    font-weight: 400;

    margin-top: 20px;
    width: 100%;
    padding: 10px;
    border-radius: 12px;
}

.wrapper__list{
    width: 100%;
    margin-top: -20px;

    position: absolute;
    z-index: 99;
    top: 55px;
    transform: translate(0px, -10px);

    opacity: 0;
    visibility: hidden;
    transition: all ease .3s;
}

</style>