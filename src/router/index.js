import { createRouter , createWebHistory } from "vue-router";

import homeView from "@/view/homeView.vue";
import jobsview from "@/view/jobsview.vue";

const router = createRouter({
    history : createWebHistory(import.meta.env.BASE_URL),
    routes : [
     {
     path : '/',
     name : 'home',
     component : homeView,
    },
    {
        path : '/jobs',
        name : 'jobs',
        component : jobsview,
    }
],
});


export default router;