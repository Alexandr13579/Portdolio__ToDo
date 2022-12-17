<template lang="">
    <section class="query">
        <form
        @submit.prevent
        >
            <input 
            class="input"
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
            queryCity: '',  
        }
    }
}
</script>
<style lang="scss" scoped>
    .query{
        width: 100%;
        max-width: 600px;

        margin: 25px auto;
        .input{
        width: 100%;
        padding: 10px;
        font-size: 25px;

        appearance: none;
        border:none;
        background: none;

        background-color: rgba(255, 255, 255, 0.7);
        border-radius: 0px 16px 0px 16px;
        text-shadow: 0px 0px 8px rgba(255, 255, 255, 0.649);
        color: #394C60;

        transition: all ease .3s;
        
        &::placeholder{
            color: #394C60;
        }

        &:focus {
            border-radius: 16px 0px 16px 0px;

        }
    }
    @media (max-width: 520px) {
        
        .input{
            font-size: 22px;
        }
    }
}
</style>