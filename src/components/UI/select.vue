<template lang="">
    <select @change="">
        <option 
            selected
            disabled
        >Select {{ name }}</option>
        <option
            class="searchTop-option" 
            v-for="option of options"
            :key="option.value"
            value="option.value"
        >{{ option }}</option>
    </select>
</template>

<script>
export default {
    name: 'my-select',
    props: {
        options: Array,
        name: String
    },
    methods: {
        namea() {
            console.log(this.name)
            console.log(value)
        }
    }
}
</script>

<style lang="">
    
</style>