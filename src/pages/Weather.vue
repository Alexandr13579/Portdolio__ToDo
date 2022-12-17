<template>
    <main>
        <div class="container">
            <h2 class="title">World Weather</h2>
            <WeatherQuery 
            @GetLocationData="GetLocationData" />
            <div class="pos__relativ">
                <transition name="list">
                    <WeatherNoInfo 
                        class="pos__absolute"
                        v-if="(weather.name == undefined)" 
                        />
                    <WeatherInfo 
                        class="pos__absolute"
                        v-else-if="(weather.name)"
                        :weather="weather"
                        :dateBuilder="dateBuilder"
                        />
                </transition>
            </div>
        </div>
    </main>
</template>

<script>
import WeatherQuery from '@/components/Weather/WeatherQuery.vue'
import WeatherNoInfo from '@/components/Weather/WeatherNoInfo.vue'
import WeatherInfo from '@/components/Weather/WeatherInfo.vue'
import BuildDateNow from '@/components/Weather/BuildDateNow.vue'

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
            let location = data
            this.locationLanLon = `lat=${location[0].lat}&lon=${location[0].lon}`;
            this.GetWeatherData();
        },
        GetWeatherData() {
            fetch(`https://api.openweathermap.org/data/2.5/weather?${this.locationLanLon}&units=metric&appid=${this.API__KEY}`)
            .then((response) => {
                return response.json();
            }).then(this.GetWeather);
        },
        GetWeather(result) {
            this.weather = result;
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
        WeatherQuery, WeatherNoInfo, WeatherInfo,BuildDateNow
    },
}
</script>
    
<style lang="scss" scoped>

main {
    position: relative;
    text-align: center;
    color: #394C60;
    background-color: #CFD1E0;
    width: 100%;
    height: 100%;
}
.title{
    font-size: 50px;
    margin-top: 25px;
}



@media (max-width: 520px) {
    main{
        .title{
        font-size: 35px;
        }

        .input{
            font-size: 20px;
        }
    }
}

.list-enter-active,
.list-leave-active {
  transition: all 0.4s ease-in-out;
  position: absolute;
}

.list-enter-from {
  transform: translateX(-230px);
  opacity: 0;
}

.list-leave-to {
    transform: translateX(230px);
    opacity: 0; 
}

</style>