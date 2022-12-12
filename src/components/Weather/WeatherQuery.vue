<template lang="">
    <section class="query">
        <form
        @submit.prevent
        >
            <input 
            v-model="queryCity"
            placeholder="Enter your city"
            type="text"
            @keyup.enter=" $emit('GetLocationData', this.queryCity), queryCity = '' "
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
        max-width: 600px;
        margin-top: 25px;
        appearance: none;
        border:none;
        background: none;
        background-color: rgba(255, 255, 255, 0.7);
        font-size: 25px;
        padding: 10px;
        border-radius: 0px 16px 0px 16px;
        text-shadow: 0px 0px 8px rgba(255, 255, 255, 0.649);
        transition: all ease .3s;
        color: #394C60;
        &::placeholder{
            color: #394C60;
        }

        &:focus {
            border-radius: 16px 0px 16px 0px;

        }
    }
</style>