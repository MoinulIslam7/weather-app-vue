import Vue from 'vue';
import Vuex from 'vuex';
import { getWeatherByCity } from '../services/weatherApi';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        selectedCity: 'London',
        weatherData: null,
        loading: false
    },
    mutations: {
        SET_CITY(state, city) {
            state.selectedCity = city;
        },
        SET_WEATHER_DATA(state, data) {
            state.weatherData = data;
        },
        SET_LOADING(state, value) {
            state.loading = value;
        }
    },
    actions: {
        async fetchWeather({ commit, state }) {
            commit('SET_LOADING', true);
            const data = await getWeatherByCity(state.selectedCity);
            commit('SET_WEATHER_DATA', data);
            commit('SET_LOADING', false);
        },
        changeCity({ commit, dispatch }, city) {
            commit('SET_CITY', city);
            dispatch('fetchWeather');
        }
    },
    getters: {
        city: state => state.selectedCity,
        weather: state => state.weatherData,
        isLoading: state => state.loading
    }
});
