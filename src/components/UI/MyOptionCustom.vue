<template lang="">   
    <li 
        class="select__item"
        :key="option"
        :value="option"
        @click="optionSelected"
        >{{ option }}
    </li>                
</template>

<script>
export default {
    name: 'MyOptionCustom',
    props: {
        option: String,
        required: true
    },
    methods: {
        optionSelected() {
            this.$emit('optionSelected', this.option)
        }
    }
}
</script>

<style lang="scss" scoped>
    .select__item{
        transition: transform ease .3s;
        padding: 5px;
        width: 100%;


        &:hover {
            transform: scale3d(1, 1.1, 1);

            
        }
    }
</style>