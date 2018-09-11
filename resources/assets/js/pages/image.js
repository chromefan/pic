/**
 * Created by luohuanjun on 2018/1/6.
 */
import vueCanvasNest from 'vue-canvas-nest'

export default {

    mounted() {
        console.log('tools页面 mounted.');
    },
    created : function () {
    },
    data() {
        return {
             config : {
                color: '0,0,255',
                opacity: 0.7,
                zIndex: -2,
                count: 99,
            }
        }
    },
    components: { vueCanvasNest },
    methods: {

    }
}