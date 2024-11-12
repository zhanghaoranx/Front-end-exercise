import { createApp } from "vue";
import App from "./App.vue";
import VSlideIn from "@/directive/permission/vSlideIn";

const app = createApp(App);
app.directive("slide-in", VSlideIn);
app.mount("#app");
