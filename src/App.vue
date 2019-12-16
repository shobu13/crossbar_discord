<template>
    <v-app id=main :style="{background: $vuetify.theme.themes[theme].background}">
        <v-app-bar
                app
                color="background"
        >
            <div class="d-flex align-center">
                VueCord
            </div>

            <v-spacer></v-spacer>

            <v-switch v-model="$vuetify.theme.dark" label="dark theme"/>
        </v-app-bar>

        <v-content>
            <HelloWorld/>
        </v-content>
    </v-app>
</template>

<script>
    import HelloWorld from './components/HelloWorld';

    export default {
        name: 'App',

        components: {
            HelloWorld,
        },

        data: () => ({
            //
        }),
        computed: {
            theme() {
                return (this.$vuetify.theme.dark) ? 'dark' : "light"
            }
        },
        mounted() {
            //
        }
    };
</script>
