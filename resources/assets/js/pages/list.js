/**
 * Created by luohuanjun on 2018/1/6.
 */

export default {

    mounted() {
        console.log('tools页面 mounted.');
    },
    created : function () {
        //this.getData();
    },
    data() {
        return {
            albums:[],
            news: [],
            cate:[]
        }
    },
    components: {
    },
    methods: {
        getData: function(){
            window.axios.get('/api/photos').then(function (res){
                this.albums = res.data;
            });
        },
        getNewPhotos: function(){
            window.axios.get('/api/newPhotos').then(function (res){
                this.news = res.data;
            });
        },
        getCategory: function(){
            window.axios.get('/api/cate').then(function (res){
                this.cate = res.data;
            });
        }
    }
}