/**
 * Created by luohuanjun on 2018/1/6.
 */

export default {

    mounted() {
        console.log('tools页面 mounted.');
    },
    created : function () {
        //this.getNewPhotos();
        this.getData();
        this.getCategory();
    },
    data() {
        return {
            albums:[],
            news: [],
            cate:[],
            drawer: false,
            test_src:"/images/lyf.jpg",
            pagination: {
                page: 1,
                total: 0,
                perPage: 0,
                visible: 7
            },
        }
    },
    components: {
    },
    methods: {
        getData: function(){
            var  self = this;
            window.axios.get('/api/album?page='+self.pagination.page).then(function (res){
                self.albums = res.data;
                self.pagination.page = res.data.current_page;
                self.pagination.total = res.data.last_page;
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
        },
        next: function(){
           this.getData();
        },
    }
}