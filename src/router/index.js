import VueRouter from 'vue-router';
import Vue from "vue";
import r1 from '../components/r1.vue'
import r2 from '../components/r2.vue'
import shouye from'../components/shouye.vue'
import HelloWorld from '../components/HelloWorld.vue'
Vue.use(VueRouter)
const router = new VueRouter({
routes:[{path:'/', redirect:"/shouye"},
    {path:'/shouye',component:shouye,
children:[
    {path:'/shouye/HelloWorld',component:HelloWorld}

]
},
{path:'/r1',component:r1},
{path:'/r2',component:r2},

]



})
export default router