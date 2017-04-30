import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter);
import {routes} from './routes';

const router = new VueRouter({ 
	routes,
	mode: 'history',
	scrollBehavior(to, from, savedPosition){
		if(savedPosition){
			return savedPosition;
		}
		if(to.hash){
			return {selector: to.hash};
		}
		return {x: 0, y: 0};
	}  
});

router.beforeEach((to, from, next) => {
	console.log('Global before Each');
	next();
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
