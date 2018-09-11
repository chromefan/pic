
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';
import Vue from 'vue';
import VueRouter from 'vue-router';
import AppComponent from './components/App.vue';
import router from './pages/routes';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'; // 加载css文件
import VueLazyLoad from 'vue-lazyload';

Vue.use(VueRouter);
Vue.use(Vuetify);
Vue.use(VueLazyLoad);


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('app', AppComponent);

const app = new Vue({
    el: '#app',
    router
});
