<template>
    <main>
        <div class="container">
            <h2 class="title">World Weather</h2>
            <WeatherQuery @GetLocationData="GetLocationData"/>
            <div v-if="(typeof weather.name != 'undefined')">
                <section class="info">
                <div class="info__city">{{ weather.name, weather.sys.country}}</div>
                <div class="info__date">{{ dateBuilder() }}</div>
            </section>
            <section class="weather">
                <div class="weather__temp">{{ Math.round(weather.main.temp) }}℃</div>
                <div class="weather__weather">{{ weather.weather[0].main }}</div>
            </section>
            </div>
        </div>
    </main>
</template>

<script>
import WeatherQuery from '@/components/Weather/WeatherQuery.vue'

export default {
    data() {
        return {
            
            API__LOCATION: 'http://api.openweathermap.org/geo/1.0/direct?',
            API__WEATHER: 'https://api.openweathermap.org/data/3.0/onecall?',
            API__KEY: '2def5dc0742efcf2ebc84923f64167b0',
            weather: {},
            locationLanLon: '',
        }
    },
    methods: {
        GetLocationData(queryCity) {
            fetch(`${this.API__LOCATION}q=${queryCity}&appid=${this.API__KEY}`)
            .then((response) => {
                return response.json();
            }).then(this.GetLocation);
        },
        GetLocation (data) {
            this.locationLanLon = data;
            this.locationLanLon = `lat=${this.locationLanLon[0].lat}&lon=${this.locationLanLon[0].lon}`;
            this.GetWeatherData();
            console.log(this.locationLanLon)
        },
        GetWeatherData() {
            fetch(`https://api.openweathermap.org/data/2.5/weather?${this.locationLanLon}&units=metric&appid=${this.API__KEY}`)
            .then((response) => {
                return response.json();
            }).then(this.GetWeather);
        },
        GetWeather(result) {
            this.weather = result;
            console.log(this.weather)
            
        },
        dateBuilder () {
            let d = new Date();
            let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

            let day = days[d.getDay()];
            let date = d.getDate();
            let month = months[d.getMonth()];
            let year = d.getFullYear();
            
            return `${day} ${date} ${month} ${year}`;
                }
            },
    components: {
        WeatherQuery
    },
}
</script>
    
<style lang="scss" scoped>
    main {
        text-align: center;
        color: #394C60;
        background-color: #CFD1E0;
        width: 100%;
        
    }

    .title{
        font-size: 40px;
        margin-top: 20px;
    }
    .info{
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;


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