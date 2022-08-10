import { createApp } from "vue";
import App from "./App.vue";
import ViewUIPlus from "view-ui-plus";
import "./styles/main.scss";
import "view-ui-plus/dist/styles/viewuiplus.css";
import "./styles/iview/index.less";

createApp(App).use(ViewUIPlus).mount("#app");
