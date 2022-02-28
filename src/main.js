import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
// import { createApp } from 'vue'
// import VueToast from 'vue-toast-notification'
// import 'vue-toast-notification/dist/theme-default.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/main.css'

// const app = createApp({})
// app.use(VueToast, {
//     position: 'top-right',
// })
// app.mount('#app')
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app')