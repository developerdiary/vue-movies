import Vue from 'vue'
import App from './App.vue'
import router from './router'
import moment from 'moment'

import Resource from 'vue-resource';
Vue.use(Resource);

import jQuery from 'jquery'
global.jQuery = jQuery

import 'bootstrap' 
import 'bootstrap/dist/css/bootstrap.min.css'


Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('YYYY/MM/DD hh:mm')
  }
})

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')