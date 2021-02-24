import App from './App.vue'

// import Vue from 'vue';
import  SimpleButton from './SimpleButton'
// console.log('sss',SimpleButton)

// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

// Vue.use(ElementUI)
// import './fonts/font.css'

import '@/checkbox/icon/font.css';

// Vue.use(SimpleButton)
new Vue({
    render: (h) => h(App)
}).$mount('#app')
