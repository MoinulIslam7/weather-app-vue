<template>
    <v-card class="pa-4" v-if="weather">
        <h3>{{ city }}</h3>
        <v-img :src="weather.icon" alt="Weather Icon" width="64" height="64" class="my-2" />
        <p>Temperature: {{ weather.temperature }}°C</p>
        <p>Humidity: {{ weather.humidity }}%</p>
        <p>Condition: {{ weather.condition }}</p>
        <p>Wind: {{ weather.wind_kph }} kph</p>
    </v-card>
</template>

<script>
export default {
    computed: {
        weather() {
            return this.$store.getters.weather;
        },
        city() {
            return this.$store.getters.city;
        }
    }
};
</script>
