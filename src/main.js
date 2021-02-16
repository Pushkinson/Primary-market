import Vue from "vue";
import App from "./App";
import store from './vuex/store';
import './assets/style/style.sass';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store
}).$mount("#app");
