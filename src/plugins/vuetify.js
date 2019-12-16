import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        themes: {
            dark: {
                primary: "#959DCB",
                secondary: "#C792EA",
                accent: '#AB47BC',
                error: '#FF5370',
                info: '#82AAFF',
                success: '#C3E88D',
                warning: '#F3F349',
                background: '#292D3E'
            }
        }
    }
});
