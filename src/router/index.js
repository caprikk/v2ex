import Vue from 'vue'
import Router from 'vue-router'
import New from '@/components/new/new'
import Hot from '@/components/hot/hot'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'new',
            component: New
        },
        {
            path: '/new',
            name: 'new',
            component: New
        },
        {
            path: '/hot',
            name: 'hot',
            component: Hot
        }
    ]
})
