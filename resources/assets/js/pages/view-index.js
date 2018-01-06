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
            cards:[
                {
                    src: '/images/1.jpg',
                    title:'sd'
                },
                {
                    src: '/images/2.jpg',
                    title:'sd'
                },
                {
                    src: '/images/3.jpg',
                    title:'sd'
                },
            ],
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
        }
    }
}
