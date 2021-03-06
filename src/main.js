import Vue from 'vue'
import App from './App.vue'
import Router from './router'
import VueResource from 'vue-resource'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/js/dist/tab' // for nab tab
import 'bootstrap/js/dist/modal' // for modal

// import VueFire from 'vuefire'
import '@/css/font.css'

Vue.config.productionTip = false
Vue.use(VueResource);

new Vue({
  render: h => h(App),
  router: Router,
}).$mount('#app')