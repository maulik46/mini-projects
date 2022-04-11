import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import moment from "moment";
import Vue3TouchEvents from "vue3-touch-events";
import "./assets/css/style.css";


const app = createApp(App);
  app
  .use(router)
  .use(Vue3TouchEvents)
  .mount("#app");

app.config.globalProperties.$moment = moment;
app.config.globalProperties.$axios = axios;
app.config.globalProperties.$filters = {
  _DDMMYYYY(value) {
    return moment(value).format('DD-MM-YYYY');
  },
  _12HoursTime(date,time) {
    return moment(`${date} ${time}`).format("hh:mm:ss A")
  }
}

