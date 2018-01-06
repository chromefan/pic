<template>
        <v-app id="inspire">
                <v-navigation-drawer
                        fixed
                        v-model="drawer"
                        app
                >
                        <v-list dense>
                                <v-list-tile @click="go('home')">
                                        <v-list-tile-action>
                                                <v-icon>home</v-icon>
                                        </v-list-tile-action>
                                        <v-list-tile-content>
                                                <v-list-tile-title>Home</v-list-tile-title>
                                        </v-list-tile-content>
                                </v-list-tile>
                                <v-list-tile @click="go('/')">
                                        <v-list-tile-action>
                                                <v-icon>sex</v-icon>
                                        </v-list-tile-action>
                                        <v-list-tile-content>
                                                <v-list-tile-title>性感</v-list-tile-title>
                                        </v-list-tile-content>
                                </v-list-tile>
                        </v-list>
                </v-navigation-drawer>
                <router-view></router-view>
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
            drawer: false
        }),
        props: {
            source: String
        },
        methods: {
                go: function (url,params) {
                    const router = this.$router;
                    router.go({path:url,params:params});
                }
        }
    }
</script>

