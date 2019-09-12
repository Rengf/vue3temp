import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import axios from 'axios'

import './assets/css/iconfont.js'
import './assets/css/iconfont.css'


//配置axios
axios.defaults.withCredentials = true
Vue.prototype.$http = axios

Vue.config.productionTip = false

//页面标题
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next()
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')