<template>
    <div>
        <mt-header fixed title="固定在顶部"></mt-header>

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


