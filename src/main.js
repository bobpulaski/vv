import { createApp } from "vue";
import App from "./App.vue";
import HeaderH1 from "./components/ui/HeaderH1.vue";
import KsoButton from "./components/ui/KsoButton.vue";
import router from "./router";

//import "milligram";
import "bulma/css/bulma.min.css";

const app = createApp(App);
app.component("header-h1", HeaderH1);
app.component("kso-button", KsoButton);
app.use(router);

app.mount("#app");
