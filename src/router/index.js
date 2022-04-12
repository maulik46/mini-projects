import { createWebHistory, createRouter } from "vue-router";

import index from "@/views/index.vue";
import Todos from "@/views/todos/Todos.vue";
import expenseManagement from "@/views/expense_manager/expense-management.vue";
import backgroundColorGenerator from "@/views/random_background/background-color-generator.vue";
import randomQuotes from "@/views/random_quotes/random-quotes.vue";
import wordCounter from "@/views/word_counter/wordCounter.vue";
import digitalClock from "@/views/digital_clock/digitalClock.vue";
import buttonGenerator from "@/views/button_generator/buttonGenerator.vue";
import currencyExchange from "@/views/currency_exchange/currencyExchange.vue";
import filterData from "@/views/filter_data/filterData.vue";
import imageSlider from "@/views/image_slider/imageSlider.vue";
import miniBlogs from "@/views/miniBlogs/miniBlogs.vue";
import showOneBlog from "@/views/miniBlogs/showOneBlog.vue";
import createBlog from "@/views/miniBlogs/createBlog.vue";
import eventCountdown from "@/views/event_countdown/eventCountdown.vue";
import passwordGenerator from "@/views/password_generator/passwordGenerator.vue";

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
    {
        path: "/image-slider",
        name: "imageSlider",
        component: imageSlider,
    },
    {
        path: "/mini-blogs",
        name: "miniBlogs",
        component: miniBlogs,
    },
    {
        path: "/mini-blogs/:id",
        name: "showOneBlog",
        component: showOneBlog,
    },
    {
        path: "/mini-blogs/create",
        name: "createBlog",
        component: createBlog,
    },
    {
        path: "/event-countdown",
        name: "eventCountdown",
        component: eventCountdown,
    },
    {
        path: "/password-generator",
        name: "passwordGenerator",
        component: passwordGenerator,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
