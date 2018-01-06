/**
 * Created by luohuanjun on 2017/6/9.
 */
import slider from 'vue-concise-slider'// import slider components
export default {

    mounted() {
        console.log('tools页面 mounted.');
    },
    created : function () {
        //this.getData();

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
        getData: function(page){
            var self = this;
            window.axios.get('/api/photos?page='+page).then(function (res){
                //self.items = self.items.concat(res.data.data);
            });
        }
    }
}
