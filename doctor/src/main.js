// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"
import axios from './axios'
import qs from 'qs'
import custom_instruction from './custom_instruction'

import md5 from 'js-md5';
Vue.config.productionTip = false
Vue.use(Element)
Vue.prototype.$md5 = md5;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
