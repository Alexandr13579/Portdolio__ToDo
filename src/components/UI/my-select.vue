<template>
    <select @change="selectedOption" v-model="selected">
        <option
            v-for="option in options"
            class="searchTop-option" 
            :key="option"
            :value="option"
            >{{ option }}
        </option>
    </select>
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

<style lang="">
    
</style>