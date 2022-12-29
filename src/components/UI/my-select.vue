<template>
    <div class="wrapper__select">
        <select @change="selectedOption" v-model="selected">
            <option
                v-for="option in options"
                class="searchTop-option" 
                :key="option"
                :value="option"
                >{{ option }}
            </option>
        </select>
    </div>
</template>

<script>
export default {
    name: 'my-select',
    props: {
        options: {
            type: Array,
            default: () => []
        },
    },
    data() {
        return {
            selected: this.options[0]
        }
    },
    methods: {
        selectedOption() {
            this.$emit('selectedOption', this.selected)
        }
    }
}
</script>

<style lang="scss" scoped>
    select {
        -ms-appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
        outline: none;
        box-shadow: 0;
        border: 0!important;
        background-color: #919197;
        background-image: none;
    }
    select::-ms-expand {
        display: none;
    }
    .wrapper__select {
        position: relative;
        display: flex;
        width: 150px;
        padding: 10px 0px;
        line-height: 3;
        background-color: #919197;
        overflow: hidden;
        border-radius: 6px;
    }

    select {
        flex: 1;
        padding: 0px 7px;
        color: #fff;
        cursor: pointer;

    }

    .wrapper__select::after {
        content: '\25BC';
        position: absolute;
        z-index: 10;
        top: 0;
        right: 0;
        height: 35px;
        width: 35px;
        padding: 10px 5px;
        color: #fff;
        cursor: pointer;
        background-color: #6e7f91;
        display: flex;
        justify-content: center;
        align-items: center;
        pointer-events: none;
        transition: .3s ease;
    }

    .wrapper__select:hover::after {
        color: #919197;
    }
</style>