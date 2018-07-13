import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/index'
import map from '@/view/map'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: index
  }, {
    path: '/map',
    name: 'map',
    component: map
  }]
})
