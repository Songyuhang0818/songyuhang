import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '@/components/test'
import subTest1 from '@/components/subTest1'
import subTest2 from '@/components/subTest2'
import Count from '@/components/Count'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/count',
      component:Count
    },
    {
      path:'/test',
      name:'test',
      component:test,
      children:[
        {
          path: '/subTest1/',
          component: subTest1
        },
        {
          path: '/subTest2/',
          component: subTest2
        }
       
      ]
    }
  ]
})
