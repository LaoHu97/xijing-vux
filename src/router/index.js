import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/index'
import map from '@/view/map'
import img01 from '@/view/img01'
import img02 from '@/view/img02'

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
  }, {
    path: '/img01',
    name: 'img01',
    component: img01
  }, {
    path: '/img02',
    name: 'img02',
    component: img02
  }]
})
