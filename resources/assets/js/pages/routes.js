import VueRouter from 'vue-router';
import ViewIndex from './view-index.vue';
import List from './list.vue';
import Image from './image.vue';

const routes = [
    {
        name: 'home',
        path: '/',
        component: List,
        meta: {
            breadcrumb: [
                {
                    name: '首页',

                    href: '/'
                }
            ]
        }
    },
    {
        name: 'view',
        path: '/view/:album_id',
        component: ViewIndex,
        meta: {
            breadcrumb: [
                {
                    name: '图片详情',
                    href: '/view/:album_id'
                }
            ]
        }
    },
    {
        name: 'list',
        path: '/list',
        component: List,
        meta: {
            breadcrumb: [
                {
                    name: '图片列表',
                    href: '/list'
                }
            ]
        }
    },
    {
        name: 'image',
        path: '/image',
        component: Image,
        meta: {
            breadcrumb: [
                {
                    name: '图表列表',
                    href: '/image'
                }
            ]
        }
    }
];

const router = new VueRouter({
    history: true,
    routes
});

export default router;
