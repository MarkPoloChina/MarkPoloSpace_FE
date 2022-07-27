import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import global from "@/js/global";

const app = createApp(App).use(store).use(router).use(ElementPlus)
app.config.globalProperties.$var = global
app.mount("#app");
