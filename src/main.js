import Vue from 'vue'
import Vuelidate from 'vuelidate'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Vuelidate)

new Vue({
  render: h => h(App),
}).$mount('#app')
