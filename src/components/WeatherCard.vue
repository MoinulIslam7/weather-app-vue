<template>
    <v-card class="pa-4" v-if="weather">
        <h3>{{ city }}, {{ weather.location.country }}</h3>
        <span>{{ weather.location.region }}</span>
        <v-img :src="weather.icon" alt="Weather Icon" width="64" height="" class="my-2" />
        <p>Temperature: {{ weather.current.temperature }}°C</p>
        <p>Humidity: {{ weather.current.humidity }}%</p>
        <p>Condition: {{ weather.current.condition }}</p>
        <p>Wind: {{ weather.current.wind_kph }} kph</p>

        <v-card-text class="text-center">
            <div>📍 {{ weather.current.location }}</div>
            <div>🕒 {{ weather.current.location_time }}</div>
        </v-card-text>

    </v-card>

</template>

<script>
export default {
    computed: {
        weather() {
            console.log(this.$store.getters.weather);
            return this.$store.getters.weather;
        },
        city() {
            return this.$store.getters.city;
        }
    }
};
</script>
