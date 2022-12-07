<template>
    <MyHeaderVue />
    <main>
        <div class="container">
            <section class="query">
                <form>
                    <input 
                    placeholder="Enter your desired city"
                    type="text"
                    />
                </form>
            </section>
            <section class="info">
                <div class="info__city">Kazan</div>
                <div class="info__date">22 June 2020</div>
            </section>
            <section class="weather">
                <div class="weather__temp">22 c</div>
                <div class="weather__weather">Snow</div>
            </section>
        </div>
    </main>
</template>

<script>
import MyHeaderVue from '@/components/My-Header.vue';

export default {
    components: {
        MyHeaderVue
    }
}
</script>
    
<style lang="scss" scoped>
    main {
        background-image: url('../assert/weather/snow.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height: 100vh;
    }

    form{
        width: 100%;
    }

    input{
        color: rgb(197, 194, 194);
        width: 100%;
        margin-top: 25px;
        appearance: none;
        border:none;
        background: none;
        background-color: rgba(255, 255, 255, 0.25);
        font-size: 25px;
        padding: 10px;
        border-radius: 0px 16px 0px 16px;
        text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
        transition: all ease .3s;

        &::placeholder{
            color: rgb(197, 194, 194);
        }

        &:focus {
            border-radius: 16px 0px 16px 0px;
            text-shadow: 0px 0px 16px rgba(0, 0, 0, 0.45);

        }
    }

    .info{
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        color: rgba(255, 255, 255, 0.741);


        &__city {
            font-size: 42px;
            font-weight: 500px;

        }

        &__date{
            font-size: 32px;
            font-weight: 400;
            font-style: italic;
        }
    }


    .weather{
        margin-top: 25px;
    }
</style>