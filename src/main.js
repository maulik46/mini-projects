import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import moment from "moment";
import "./assets/css/style.css";


const app = createApp(App);
  app
  .use(router)
  .mount("#app");

app.config.globalProperties.$moment = moment;
app.config.globalProperties.$axios = axios;
app.config.globalProperties.$filters = {
  DDMMYYYY(value) {
    return moment(value).format('DD-MM-YYYY');
  }
}
