import VueRouter from 'vue-router';
import Vue from "vue";
import r1 from '../components/r1.vue'
import r2 from '../components/r2.vue'
import shouye from'../components/shouye.vue'
import HelloWorld from '../components/HelloWorld.vue'
import interview from '../components/interview.vue'
import mianshi from '../components/mianshi.vue'
import tonghua from '../components/tonghua.vue'
Vue.use(VueRouter)
const router = new VueRouter({
routes:[{path:'/', redirect:"/shouye"},
    {path:'/shouye',component:shouye,
children:[
    {path:'/shouye/HelloWorld',component:HelloWorld}

]
},
{path:'/r1',component:r1},
{path:'/interview',component:interview},
{path:'/r2',component:r2},
{path:'/mianshi',component:mianshi},
{path:'/tonghua',component:tonghua},
]



})
export default router