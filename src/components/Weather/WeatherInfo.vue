<template lang="">
    <Transition name="list">
        <div>
            <section class="info">
                <div class="info__city">{{ weather.name}}</div>
                <BuildDateNow :dateBuilder="dateBuilder"/>
            </section>
            <section class="weather">
                <div class="weather__temp">{{ Math.round(weather.main.temp) }}℃</div>
                <div class="weather__weather">{{ weather.weather[0].main }}</div>
            </section>
        </div>
    </Transition>   
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
        margin-top: 40px;
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
</style>