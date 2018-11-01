import Vue from 'vue'
import Router from 'vue-router'
import Resume from '@/components/Resume'
import nav from '@/pages/nav'
import index from '@/pages/index'

import blogNav from '@/pages/blog_nav'
import home from '@/pages/home'
import detail from '@/pages/detail'
import all from '@/pages/all'
import me from '@/pages/me'
import messageBoard from '@/pages/message_board'

import managerNav from '@/pages/manager/manager_nav'
import edit from '@/pages/manager/edit'
import manager from '@/pages/manager/home'
import tag from '@/pages/manager/tag'

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
          component:blogNav,
          redirect: '/blog/home',
          children:[
            {
              path:"/blog/home",
              component:home
            },
            {
              path:"/blog/detail",
              component:detail
            },
            {
              path:"/blog/all",
              component:all
            },
            {
              path:"/blog/me",
              component:me
            },
            {
              path:"/blog/message_board",
              component:messageBoard
            }
          ]
        },
        // not herer
        { 
          path:"/manager",
          component:managerNav,
          redirect:'/manager/home',
          children:[
            {
              path:'/manager/edit',
              component:edit
            },
            {
              path:'/manager/home',
              component:manager
            },
            {
              path:'/manager/tag',
              component:tag
            }
          ]
        }
      ]
    }
  ]
})
