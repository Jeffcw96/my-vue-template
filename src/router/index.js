import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => { return import(/* webpackChunkName: "home" */ "../views/Home.vue") }
    },
    {
      path: '/about',
      name: 'About',
      component: () => { return import(/* webpackChunkName: "about" */ "../views/About.vue") }
    },
  ]
})
