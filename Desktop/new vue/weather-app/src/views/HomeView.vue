<template>
  <div class="home" :class="isDay ? 'day' : 'night'">
    <v-container class="px-10" id="card-container" elevation="0">
      <v-card-title class="justify-center">Weather in</v-card-title>
      
          
    <form class="" @submit.prevent="getWeather">
       <v-text-field
       type="text"
        class="search-city "
        label="What City?"
        solo
        id=""
        v-model="searchCity"
        
      ></v-text-field>
    </form>
    <p class="text-center my-3" v-if="cityFound">No city found</p>

    <v-card  class=" text-center" id="card">
      <v-card-subtitle class="pb-0" > {{weather.cityName}}</v-card-subtitle>
      
      <v-card-subtitle class="pt-0">{{weather.country}}</v-card-subtitle>
      <v-spacer></v-spacer>
      <h1 class="display-4">{{weather.temperature}}&deg;C</h1>
      <p class="description">{{weather.description}}</p>
      <div class="d-flex container">
        <p class="bottom-part" id="low-temp">{{weather.lowTemp}}&deg;C</p>
        <p class="bottom-part" id="high-temp">{{weather.highTemp}}&deg;C</p>
      </div>
      <div class="d-flex container2 justify-center">
        <p class="bottom-part display-1 pa-0 ma-0 font-weight-medium" id="feels-like">{{weather.feelslike}}&deg;C</p>
        <p class="bottom-part display-1 pa-0 ma-0 font-weight-medium" id="humidity">{{weather.humidity}}%</p>
      </div>
      <div class="d-flex mt-0 container3">
        <p class="bottom-part mt-0 subtitle-2" id="feels-like-label">feels like</p>
        <p class="bottom-part subtitle-2" id="humidity-label">humidity</p>

      </div>
    </v-card>


    </v-container>
  </div>
  
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  data: () => ({
    cityFound: false,
      visible: false,
      stormy: false,
      cloudy: false,
      clearSky: false,
      clearNight: false,
      snowy: false,
      isDay: true,
      
    searchCity:'',
    weather:{
      cityName: 'La Union',
      country: 'PH',
      temperature: 12,
      description: 'Cloudy',
      lowTemp: '19',
      highTemp: '30',
      feelslike: '20',
      humidity: '22',
    }
  }),
  methods:{
    getWeather: async function(){
      console.log(this.searchCity);
      const key = '5a6213c0755bbd5bcf0cfc61124685c0'
      const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${this.searchCity}&appid=${key}&units=metric`;
      

 //fetch weather
      try {
        const response = await fetch(baseURL);
        const data = await response.json();
        console.log(data);
        this.searchCity = "";
        this.weather.cityName = data.name;
        this.weather.country = data.sys.country;
        this.weather.temperature = Math.round(data.main.temp);
        this.weather.description = data.weather[0].description;
        this.weather.lowTemp = Math.round(data.main.temp_min);
        this.weather.highTemp = Math.round(data.main.temp_max);
        this.weather.feelsLike = Math.round(data.main.feels_like);
        this.weather.humidity = Math.round(data.main.humidity);

        const timeOfDay = data.weather[0].icon;
        ///check for time of day
        if (timeOfDay.includes("n")) {
          this.isDay = false;
        } else {
          this.isDay = true;
        }
    const mainWeather = data.weather[0].main;
        //check weather animations
        if (mainWeather.includes("Clouds")) {
          this.stormy = false;
          this.cloudy = true;
          this.clearSky = false;
          this.clearNight = false;
          this.snowy = false;
        }
        if (mainWeather.includes("Clouds")) {
          this.stormy = false;
          this.cloudy = true;
          this.clearSky = false;
          this.clearNight = false;
          this.snowy = false;
        }
        if (
          mainWeather.includes("Thunderstorm") ||
          mainWeather.includes("Rain")
        ) {
          this.stormy = true;
          this.cloudy = false;
          this.clearSky = false;
          this.clearNight = false;
          this.snowy = false;
        }
        if (mainWeather.includes("Clear") && this.isDay) {
          this.stormy = false;
          this.cloudy = false;
          this.clearSky = true;
          this.clearNight = false;
          this.snowy = false;
        }
        if (mainWeather.includes("Clouds") && !this.isDay) {
          this.stormy = false;
          this.cloudy = false;
          this.clearSky = false;
          this.clearNight = true;
          this.snowy = false;
        }
        if (mainWeather.includes("Snow")) {
          this.stormy = false;
          this.cloudy = false;
          this.clearSky = false;
          this.clearNight = false;
          this.snowy = true;
        }
        this.visible = true;
        this.cityFound = false;
      } catch (error) {
        console.log(error);
        this.cityFound = true;
        this.visible = false;
      }
    },
  }
}
</script>

<style >
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

  .search-city{
    border-bottom-right-radius: 1rem;
    border-top-left-radius: 1rem;
    
  }
  .bottom-part{
    width: 50%;
    
  }
  #card-container{
    width: 500px;
  }
  #card{
    background: transparent;
  }
</style>