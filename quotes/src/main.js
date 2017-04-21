import Vue from 'vue'
imoprt VueRouter from 'vue-router';
import App from './App.vue'

Vue.use(VueRouter);

new Vue({
  el: '#app',
  render: h => h(App)
})
