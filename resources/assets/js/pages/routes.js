import VueRouter from 'vue-router';
import HomeIndex from './home-index.vue';


const routes = [
    {
        name: 'home',
        path: '/',
        component: HomeIndex,
        meta: {
            breadcrumb: [
                {
                    name: '首页',

                    href: '/index'
                }
            ]
        }
    }
];

const router = new VueRouter({
    routes
});

export default router;
