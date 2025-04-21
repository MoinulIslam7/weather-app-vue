import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        themes: {
            light: {
                primary: '#1976D2',
                secondary: '#424242',
                accent: '#82B1FF',
                error: '#FF5252',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FB8C00'
            },
            dark: {
                primary: '#2196F3',
                secondary: '#FFCDD2',
                accent: '#FF4081',
                error: '#F44336',
                info: '#00ACC1',
                success: '#4CAF50',
                warning: '#FFC107'
            }
        }
    }
});
