/**
 * Created by luohuanjun on 2018/1/6.
 */

export default {

    mounted() {
        console.log('tools页面 mounted.');
    },
    created : function () {
        this.getData();
        this.getNewPhotos();
        this.getCategory();
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
            var  self = this;
            window.axios.get('/api/album').then(function (res){
                self.albums = res.data;
            });
        },
        getNewPhotos: function(){
            var  self = this;
            window.axios.get('/api/newPhotos').then(function (res){
                self.news = res.data;
            });
        },
        getCategory: function(){
            var  self = this;
            window.axios.get('/api/cate').then(function (res){
                self.cate = res.data;
            });
        }
    }
}