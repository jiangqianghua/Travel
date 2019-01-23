// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// styles 在config里面配置了src/assets/styles 这个目录
// 样式重置
import 'styles/reset.css'
// 解决1像素边框的问题
import 'styles/border.css'
// 引入字体库
import 'styles/iconfont.css'
// 引入fastClick，解决点击延迟300毫秒执行的问题
import fastClick from 'fastclick'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
