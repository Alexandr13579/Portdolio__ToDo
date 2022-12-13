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
    // mounted() {
    //     if (localStorage.getItem('weather')) {
    //         this.weather = JSON.parse(localStorage.getItem('weather'));
    //     }
    // },
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
            // const weatheer = JSON.stringify(this.weather);
            // localStorage.setItem('weather', weatheer);
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
    
<style lang="scss">

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
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease-in-out;
}

.list-enter-from ,
.list-leave-to {
  transform: translateX(30px);
  opacity: 0;
}

</style>