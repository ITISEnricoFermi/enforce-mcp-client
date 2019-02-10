import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import VueSocketIO from 'vue-socket.io'
import socketio from 'socket.io-client'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false

export const eventBus = new Vue({
  methods: {
    temperature (temp) {
      this.$emit('temperature', temp)
    },
    humidity (humi) {
      this.$emit('humidity', humi)
    },
    pressure (press) {
      this.$emit('pressure', press)
    },
    orientation (ori) {
      this.$emit('orientation', ori)
    },
    position (pos) {
      this.$emit('position', pos)
    }
  }
})

Vue.use(new VueSocketIO({
  debug: false,
  connection: socketio('/', {
    secure: true,
    rejectUnauthorized: false,
    transports: ['websocket', 'flashsocket', 'polling']
  })
}))

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDP_HylnpMK2Zc1HuRlBYRg816EodnznME',
    libraries: 'places'
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
