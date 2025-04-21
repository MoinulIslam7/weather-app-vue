import axios from 'axios';

const API_KEY = '8112045f8eb4421cbe291809252104';
const BASE_URL = 'https://api.weatherapi.com/v1';

export const getWeatherByCity = async (city) => {
    try {
        const response = await axios.get(`${BASE_URL}/current.json`, {
            params: {
                key: API_KEY,
                q: city
            }
        });

        const data = response.data;
        return {
            temperature: data.current.temp_c,
            humidity: data.current.humidity,
            condition: data.current.condition.text,
            icon: data.current.condition.icon,
            wind_kph: data.current.wind_kph
        };
    } catch (error) {
        console.error('Error fetching weather:', error);
        return null;
    }

};
