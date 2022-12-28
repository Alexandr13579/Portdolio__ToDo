<template lang="">
    <option
        class="searchTop-option" 
        :key="option.value"
        value="option.value"
        >{{ option }}
    </option>
</template>

<script>
export default {
    props: {
        option: String
    }
}
</script>

<style lang="">
    
</style>