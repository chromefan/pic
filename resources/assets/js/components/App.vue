<template>
        <v-app id="inspire">
                <v-navigation-drawer
                        fixed
                        v-model="drawer"
                        app
                >
                        <v-list dense>
                                <v-list-tile @click="">
                                        <v-list-tile-action>
                                                <v-icon>home</v-icon>
                                        </v-list-tile-action>
                                        <v-list-tile-content>
                                                <v-list-tile-title>Home</v-list-tile-title>
                                        </v-list-tile-content>
                                </v-list-tile>
                                <v-list-tile @click="">
                                        <v-list-tile-action>
                                                <v-icon>contact_mail</v-icon>
                                        </v-list-tile-action>
                                        <v-list-tile-content>
                                                <v-list-tile-title>Contact</v-list-tile-title>
                                        </v-list-tile-content>
                                </v-list-tile>
                        </v-list>
                </v-navigation-drawer>
                <v-toolbar color="pink" dark fixed app>
                        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
                        <v-toolbar-title>Application</v-toolbar-title>
                </v-toolbar>
                <v-content>
                        <router-view></router-view>
                </v-content>
                <v-footer color="pink" app>
                        <v-spacer></v-spacer>
                        <span class="white--text">&copy; 2017</span>
                </v-footer>
        </v-app>
</template>

<script>
    export default {
        mounted() {
            console.log('App Component mounted.')
        },

        components: {
            'app-body': require('./AppBody.vue'),
            'app-footer': require('./AppFooter.vue'),
            'app-header': require('./AppHeader.vue'),
        },
        data: () => ({
            drawer: null
        }),
        props: {
            source: String
        }
    }
</script>

