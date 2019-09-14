import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import List from './views/List.vue'
import Detail from './views/Detail.vue'
import Payment from './views/Payment.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/list/:id', component: List },
	{ path: '/detail/:id', component: Detail},
	{ path: '/payment', component:Payment},
	// 默认路由
    { path: '/*', component: Home },
  ]
})
