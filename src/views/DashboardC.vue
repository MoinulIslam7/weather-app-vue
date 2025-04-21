<template>
    <v-container>
        <CitySelector />
        <v-progress-circular v-if="loading" indeterminate color="primary" class="my-5" />
        <WeatherCard v-else />
    </v-container>
</template>

<script>
import CitySelector from '@/components/CitySelector.vue';
import WeatherCard from '@/components/WeatherCard.vue';

export default {
    components: { CitySelector, WeatherCard },
    computed: {
        loading() {
            return this.$store.getters.isLoading;
        }
    },
    created() {
        this.$store.dispatch('fetchWeather');
    }
};
</script>
