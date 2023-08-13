import {createRouter, createWebHistory} from "vue-router";
import {useUserStore} from "@/pinia/userStore";


const routes = [
    {
        path: "/",
        component: () => import("@/components/pages/MainPage.vue"),
    },
    {
        path: "/notes",
        component: () => import("@/components/pages/AllNotesPage.vue"),
    },
    {
        path: "/notes/:id",
        component: () => import("@/components/pages/SingleNotePage.vue"),
    },
    {
        path: "/new",
        component: () => import("@/components/pages/NewNotePage.vue"),
        // beforeEnter: () => {
        //     const userStore = useUserStore()
        //     if(!userStore.user.id){
        //         return false
        //     }
        // },
    },
    {
        path: "/login",
        component: () => import("@/components/pages/LoginPage.vue"),
        beforeEnter: () => {
            const userStore = useUserStore()
            if(userStore.user.id){
                return false
            }
        }
    },
    {
        path: "/registration",
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