<template lang="">   
    <li 
        class="select__item"
        v-for="option in options"
        :key="option"
        :value="option"
        >{{ option }}
    </li>                
</template>

<script>
export default {
    name: 'MyOptionCustom',
    props: {
        options: Array,
    },
}
</script>

<style lang="scss" scoped>
    
</style>