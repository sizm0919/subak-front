import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//axios
import 'axios' //追記
//import VueAxios from 'vue-axios' //追記

//Vue.use(VueAxios, axios) //追記

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import "bootstrap-icons/font/bootstrap-icons.css"

//Chart.js
//import "vue-chartjs/dist/index"
//import "chart.js/dist/chart"

//Jquery
//import "jquery/dist/jquery"

createApp(App).use(store).use(router).mount('#app')
