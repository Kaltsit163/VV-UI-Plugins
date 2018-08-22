import Vue from 'vue'
import App from './App.vue'
import VvPlugins from './packages/index'

Vue.use(VvPlugins)

new Vue({
  el: '#app',
  render: h => h(App)
})
