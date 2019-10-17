import Vue from 'vue'
import axios from 'axios'
axios.defaults.withCredentials=false

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.baseURL="http://192.168.1.121:9040"
Vue.prototype.axios = axios
