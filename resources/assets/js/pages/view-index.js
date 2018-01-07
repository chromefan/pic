/**
 * Created by luohuanjun on 2017/6/9.
 */
export default {

    mounted() {
        console.log('tools页面 mounted.');
    },
    created : function () {
        var album_id = this.$route.params.album_id;
        console.log(album_id);
        this.getData(album_id);
    },
    data() {
        return {
            cards:[],
            relates:[],
            id:[],
            drawer: false

        }
    },
    components: {
    },
    methods: {
        getData: function(album_id){
            var self = this;
            window.axios.get('/api/photos/'+album_id).then(function (res){
                self.cards = res.data;
            });
            window.axios.get('/api/relatePhotos/'+album_id).then(function (res){
                self.relates = res.data;
            });
        },
        go: function (url) {
            console.log(url);
            window.location.href = '/#'+url;
            window.location.reload();
        }
    }
}
