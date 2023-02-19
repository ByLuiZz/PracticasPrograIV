import { createRouter, createWebHistory } from "vue-router";
import Home from "./src/views/home.vue"
import Countries from './src/views/countries/index.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: '/countries',
            name: 'Countries',
            component: Countries

        }
    ]
})