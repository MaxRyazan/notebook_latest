import {createRouter, createWebHistory} from "vue-router";
import {useUserStore} from "@/pinia/userStore";

export const baseURL: string = '/notebook_latest'

const routes = [
    {
        path: `${baseURL}`,
        redirect: `${baseURL}/main`
    },
    {
        path: `${baseURL}/main`,
        component: () => import("@/components/pages/MainPage.vue"),
    },
    {
        path: `${baseURL}/notes`,
        component: () => import("@/components/pages/AllNotesPage.vue"),
    },
    {
        path: `${baseURL}/notes/:id`,
        component: () => import("@/components/pages/SingleNotePage.vue"),
    },
    {
        path: `${baseURL}/new`,
        component: () => import("@/components/pages/NewNotePage.vue"),
        // beforeEnter: () => {
        //     const userStore = useUserStore()
        //     if(!userStore.user.id){
        //         return false
        //     }
        // },
    },
    {
        path: `${baseURL}/login`,
        component: () => import("@/components/pages/LoginPage.vue"),
        beforeEnter: () => {
            const userStore = useUserStore()
            if(userStore.user.id){
                return false
            }
        }
    },
    {
        path: `${baseURL}/registration`,
        component: () => import("@/components/pages/RegistrationPage.vue"),
        beforeEnter: () => {
            const userStore = useUserStore()
            if(userStore.user.id){
                return false
            }
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router