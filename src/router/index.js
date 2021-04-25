import { createWebHistory, createRouter } from "vue-router";

import index from "@/views/index.vue";
import Todos from "@/views/Todos.vue";
import expenseManagement from "@/views/expense-management.vue";
import backgroundColorGenerator from "@/views/background-color-generator.vue";
import randomQuotes from "@/views/random-quotes.vue";
import wordCounter from "@/views/wordCounter.vue";
import digitalClock from "@/views/digitalClock.vue";
import buttonGenerator from "@/views/buttonGenerator.vue"; 
import currencyExchange from "@/views/currencyExchange.vue";
import filterData from "@/views/filterData.vue";

const routes = [
  {
    path: "/",
    name: "index",
    component: index,
  },
  {
    path: "/Todos",
    name: "Todos",
    component: Todos,
  },
  {
    path: "/expense-management",
    name: "expenseManagement",
    component: expenseManagement,
  },
  {
    path: "/background-color-generator",
    name: "backgroundColorGenerator",
    component: backgroundColorGenerator,
  },
  {
    path: "/random-quotes",
    name: "randomQuotes",
    component: randomQuotes,
  },
  {
    path: "/word-counter",
    name: "wordCounter",
    component: wordCounter,
  },
  {
    path: "/digital-clock",
    name: "digitalClock",
    component: digitalClock,
  },
  {
    path: "/button-generator",
    name: "buttonGenerator",
    component: buttonGenerator,
  },
  {
    path: "/currency-exchange",
    name: "currencyExchange",
    component: currencyExchange,
  },
  {
    path: "/filter-data",
    name: "filterData",
    component: filterData,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
