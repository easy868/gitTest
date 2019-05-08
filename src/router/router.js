import Vue from 'vue'
import Router from 'vue-router'

const hello = () => import('@/components/hello')
const world = () => import('@/components/world')

Vue.use(Router)

export default new Router({
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    console.log('savePosition', savedPosition)
  },
  routes: [
    {
      path: '/hello',
      name: 'hello',
      component: hello
    }, {
      path: '/world',
      name: 'world',
      component: world
    }
  ]
})
