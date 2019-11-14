import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import frist from '@/components/frist'
import detail from '@/components/detail'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/aa',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/',
            name: 'frist',
            component: frist
        },
        {
            path: '/detail',
            name: 'detail',
            component: detail
        }
    ]
})