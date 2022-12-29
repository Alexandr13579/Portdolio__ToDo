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

<style lang="scss" scoped>
    option{
        background-color: #6e7f91;
        cursor: pointer;
    }
</style>