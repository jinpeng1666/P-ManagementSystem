import Vue from 'vue'
import App from './App.vue'

// 引入全局样式
import '@/assets/styles/reset.css'

// 引入阿里巴巴图标样式
import '@/assets/iconfont/iconfont.css'

// 引入element组件样式
import 'element-ui/lib/theme-chalk/index.css'
// 按需引入element组件
import { Button, Select, Header, Aside, Main, Container, Menu, Submenu, MenuItem, MenuItemGroup } from 'element-ui'
Vue.use(Button)
Vue.use(Select)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Container)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)

// 引入路由
import router from '@/router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
