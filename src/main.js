import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import * as firebase from "firebase";
import token from "../tokens.json";

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: token.firebaseConfig.apiKey,
  authDomain: token.firebaseConfig.authDomain,
  databaseURL: token.firebaseConfig.databaseURL,
  projectId: token.firebaseConfig.projectId,
  storageBucket: token.firebaseConfig.storageBucket,
  messagingSenderId: token.firebaseConfig.messagingSenderId,
  appId: token.firebaseConfig.appId
};
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
