<template>
    <div class="vc-page">

    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('App Header Component mounted.')
        },
        data() {
            return {
                appName: window.Laravel.appName,

            }
        },
        methods: {
//            startsWith: function (s, t) {
//                return window._.startsWith(s, t);
//            }
        }
//        watch: {
//            '$route': function (val, oldVal) {
//                console.log('route change', val, oldVal);
//            }
//        }
    }
</script>


