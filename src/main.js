// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueSocketio from 'vue-socket.io'
import socketio from 'socket.io-client'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false

export const SocketInstance = socketio('http://localhost:3000')

Vue.use(VueSocketio, SocketInstance)

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDP_HylnpMK2Zc1HuRlBYRg816EodnznME',
    libraries: 'places'
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
