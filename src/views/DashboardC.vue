<template>
    <v-container>
        <CitySelector />
        <v-progress-circular v-if="loading" indeterminate />
        <div v-else>
            <WeatherCard />
            <h4 class="my-4">3-Day Forecast</h4>
            <ForecastCard />
        </div>
    </v-container>
</template>

<script>
import WeatherCard from '@/components/WeatherCard.vue';
import ForecastCard from '@/components/ForecastCard.vue';
import CitySelector from '@/components/CitySelector.vue';

export default {
    components: { WeatherCard, ForecastCard, CitySelector },
    computed: {
        loading() {
            return this.$store.getters.isLoading;
        }
    },
    created() {
        this.$store.dispatch('fetchWeather');

        if (!this.$store.state.selectedCity) {
            navigator.geolocation.getCurrentPosition((position) => {
                const coords = `${position.coords.latitude},${position.coords.longitude}`;
                this.$store.dispatch('changeCity', coords);
            });
        }
    }
};

</script>
