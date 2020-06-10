import Vue from 'vue'
import App from './App.vue'
// import firebase from 'firebase'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
/*
const firebaseConfig = {
  apiKey: "AIzaSyAXchCL2JydXdjO9ry9hJGqsRxRuyFWC4U",
  authDomain: "vue-firebase-44e89.firebaseapp.com",
  databaseURL: "https://vue-firebase-44e89.firebaseio.com",
  projectId: "vue-firebase-44e89",
  storageBucket: "vue-firebase-44e89.appspot.com",
  messagingSenderId: "33044406352",
  appId: "1:33044406352:web:d5a16e19d0d34c9cab7155"
};

firebase.initializeApp(config)
*/

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
