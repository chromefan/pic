<template>
    <div>
        <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
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


