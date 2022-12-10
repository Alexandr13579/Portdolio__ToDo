<template lang="">
    <section class="query">
        <form
        @submit.prevent
        >
            <input 
            v-model="queryCity"
            placeholder="Enter your desired city"
            type="text"
            @keyup.enter="$emit('GetLocationData', this.queryCity)"
            />
        </form>
    </section>
</template>
<script>
export default {
    data() {
        return {
            queryCity: ''
        }
    }
}
</script>
<style lang="scss" scoped>
    
    input{
        width: 100%;
        margin-top: 25px;
        appearance: none;
        border:none;
        background: none;
        background-color: rgba(255, 255, 255, 0.25);
        font-size: 25px;
        padding: 10px;
        border-radius: 0px 16px 0px 16px;
        text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
        transition: all ease .3s;

        &::placeholder{
            color: rgb(197, 194, 194);
        }

        &:focus {
            border-radius: 16px 0px 16px 0px;

        }
    }
</style>