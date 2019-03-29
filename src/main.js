import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
//引入假数据
Vue.prototype.appData = require('@static/data.json')
Vue.prototype.seller = Vue.prototype.appData.seller
Vue.prototype.goods = Vue.prototype.appData.goods
Vue.prototype.ratings = Vue.prototype.appData.ratings

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
