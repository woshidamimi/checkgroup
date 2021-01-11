import App from './App.vue'

import Vue from 'vue';
import  SimpleButton from 'damimi-button'
console.log('sss',SimpleButton)


Vue.use(SimpleButton)
new Vue({
    render: (h) => h(App)
}).$mount('#app')
