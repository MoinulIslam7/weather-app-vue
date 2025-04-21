<template>
    <v-select :items="cities" label="Select City" v-model="selected" @change="onCityChange"></v-select>
</template>


<script>
import cities from '../assets/cities.json';

export default {
    data() {
        return {
            cities,
            selected: this.$store.state.selectedCity
        };
    },
    methods: {
        onCityChange(city) {
            this.$store.dispatch('changeCity', city);
        }
    }
};
</script>
