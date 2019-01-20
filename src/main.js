// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 样式重置
import './assets/styles/reset.css'
// 解决1像素边框的问题
import './assets/styles/border.css'
// 引入fastClick，解决点击延迟300毫秒执行的问题
import fastClick from 'fastclick'
Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
