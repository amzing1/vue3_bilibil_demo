import { createApp } from "vue";
import App from "./App.vue";
import ViewUIPlus from "view-ui-plus";
import "./styles/main.scss";
import "view-ui-plus/dist/styles/viewuiplus.css";

createApp(App).use(ViewUIPlus).mount("#app");
