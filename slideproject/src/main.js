import Vue from "vue";
import App from "./App.vue";
import vSlideIn from "./directive/permission/vSlideIn";

Vue.config.productionTip = false;
Vue.directive("slideIn", vSlideIn);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
