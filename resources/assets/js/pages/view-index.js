/**
 * Created by luohuanjun on 2017/6/9.
 */
export default {

    mounted() {
        console.log('tools页面 mounted.');
    },
    created : function () {
        this.getData();

    },
    data() {
        return {
            cards:[],
        }
    },
    components: {
    },
    methods: {
        getData: function(){
            var self = this;
            var album_id = self.$route.params.album_id;
            window.axios.get('/api/photos/'+album_id).then(function (res){
                self.cards = res.data;
            });
        },
        go: function (url) {
            window.location.href = '/#/'+url;
        }
    }
}
