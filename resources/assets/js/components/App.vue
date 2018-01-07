<template>
        <v-app id="inspire">
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
        },

        components: {
            'app-body': require('./AppBody.vue'),
            'app-footer': require('./AppFooter.vue'),
            'app-header': require('./AppHeader.vue'),
        },
        methods: {
                go: function (url,params) {
                    const router = this.$router;
                    router.go({path:url,params:params});
                }
        }
    }
</script>

