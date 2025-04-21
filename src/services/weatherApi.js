import axios from 'axios';

const API_KEY = '8112045f8eb4421cbe291809252104';
const BASE_URL = 'https://api.weatherapi.com/v1';

export const getWeatherByCity = async (city) => {
    try {
        const response = await axios.get(`${BASE_URL}/forecast.json`, {
            params: {
                key: API_KEY,
                q: city,
                days: 3
            }
        });

        const data = response.data;
        return {
            current: {
                temperature: data.current.temp_c,
                humidity: data.current.humidity,
                condition: data.current.condition.text,
                icon: data.current.condition.icon,
                wind_kph: data.current.wind_kph,
                location_time: data.location.localtime
            },
            location: data.location,
            forecast: data.forecast.forecastday.map(day => ({
                date: day.date,
                condition: day.day.condition.text,
                icon: day.day.condition.icon,
                max_temp: day.day.maxtemp_c,
                min_temp: day.day.mintemp_c
            }))
        };
    } catch (error) {
        console.error('Error fetching weather:', error);
        return null;
    }
};
