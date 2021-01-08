import Vue from 'vue'
import App from './App.vue'
import './assets/resources/css/style.css'
//import './assets/vendor/css/grid.css'
import './assets/vendor/css/normalize.css'
import './assets/vendor/css/animated.css'

//js
/*import './assets/vendor/js/html5shiv.min.js'
import './assets/vendor/js/respond.min.js'
import './assets/vendor/js/selectivizr.js'
import './assets/vendor/js/jquery.waypoints.min.js'
import './assets/vendor/js/animated.js'
import './assets/vendor/js/mixitup.min.js'*/
//import './assets/resources/js/main.js'



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
