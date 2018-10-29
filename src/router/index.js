import Vue from 'vue'
import Router from 'vue-router'
import Resume from '@/components/Resume'
import nav from '@/pages/nav'
import index from '@/pages/index'
import home from '@/pages/home'
import manager from '@/pages/manager/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect:'/nav',
      component: index,
      children:[
        {
          path:"/nav",
          component:nav
        },
        {
          path:"/resume",
          component:Resume
        },
        {
          path:"/blog",
          component:home
        },
        // not herer
        { 
          path:"/manager",
          component:manager
        }
      ]
    }
  ]
})
