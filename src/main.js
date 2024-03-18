import Vue from 'vue'
import App from './App.vue'

// 引入element组件样式
import 'element-ui/lib/theme-chalk/index.css'
// 按需引入element组件
import { Button, Select } from 'element-ui'
Vue.use(Button)
Vue.use(Select)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
