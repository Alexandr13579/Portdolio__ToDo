<template>
    <div class="info" v-if="weather.name">
        <section class="info__inf inf">
            <div class="inf__city">{{ weather.name}}</div>
            <BuildDateNow :dateBuilder="dateBuilder"/>
        </section>
        <section class="info__weather weather">
            <div class="weather__temp">{{ Math.round(weather.main.temp) }}℃</div>
            <div class="weather__weather">{{ weather.weather[0].main }}</div>
        </section>
    </div>  
</template>

<script>
import BuildDateNow from './BuildDateNow.vue';
export default { 
    props: {
        weather: Object,
        dateBuilder: Function,
        required: true
    },
    components: {
        BuildDateNow
    }
}
</script>
<style lang="scss" scoped>

.info{
    position: absolute;
    top: 155px;
    left: 0;
    right: 0;
    bottom: 0;

    .inf{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;

        &__city{
            font-size: 42px;
            font-weight: 500px;
        }
    }


    .weather{
        margin-top: 50px;
        &__temp {
                display: inline-block;
                font-size: 120px;
                font-weight: 500;
                background-color: rgba(255, 255, 255, 0.7);
                padding: 50px 30px;
                border-radius: 15px;                

        }
        &__weather{
            font-size: 70px;
            margin-top: 10px;
        }
    }
    @media screen and (max-width: 520px) {
        top: 140px;

        .inf{

        &__city{
            font-size: 38px;
        }
    }


    .weather{
        margin-top: 30px;
        &__temp {
                font-size: 90px;
                padding: 38px 10px;

        }
        &__weather{
            font-size: 40px;
        }
    }
    }
}
</style>