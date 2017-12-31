/**
 * Created by luohuanjun on 2017/6/9.
 */

export default {
    mounted() {
        console.log('tools页面 mounted.');

    },
    created : function () {
        this.getAlbum();
    },
    data() {
        return {
            limit: 10,
            list:{},
        }
    },
    components: {

    },
    methods: {
        getAlbum: function(){
            var self = this;
            //self.search_init = self.search;
            window.axios.get('/api/album').then(function (res){
                self.list = res.data;
            });
        },

    }
}
