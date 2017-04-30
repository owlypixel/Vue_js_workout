// import User from './components/user/User.vue'
import Home from './components/Home.vue'
// import UserStart from './components/user/UserStart.vue'
// import UserDetail from './components/user/UserDetail.vue'
// import UserEdit from './components/user/UserEdit.vue'


const User = resolve => {
	require.ensure(['./components/user/User.vue'], () => {
		resolve(require('./components/user/User.vue'));
	});
}
const UserStart = resolve => {
	require.ensure(['./components/user/UserStart.vue'], () => {
		resolve(require('./components/user/UserStart.vue'));
	});
}
const UserDetail = resolve => {
	require.ensure(['./components/user/UserDetail.vue'], () => {
		resolve(require('./components/user/UserDetail.vue'));
	});
}
const UserEdit = resolve => {
	require.ensure(['./components/user/UserEdit.vue'], () => {
		resolve(require('./components/user/UserEdit.vue'));
	});
}

export const routes = [
	{ path: '/user', component: User, children: [ 
		{ path: '', component: UserStart},
		{ path: ':id', component: UserDetail, beforeEnter: (to, from, next) => {
			console.log('inside route');
			next();
		}},
		{ path: ':id/edit', component: UserEdit, name: 'userEdit'}
	]},
	{ path: '', component: Home, name: 'Home'},
	{ path: '/redirect-me', redirect: { name: 'Home'}},
	{ path: '*', redirect: '/' }
];