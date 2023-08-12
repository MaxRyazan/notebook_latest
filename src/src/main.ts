import { createApp } from 'vue'
import './scss/style.scss'
import App from './App.vue'
import router from "@/router/v-router";
import {createPinia} from "pinia";
import {if_auth} from "@/directives/if_auth";
import ReusableButton from "@/components/reusable/ReusableButton.vue";
import ReusableInput from "@/components/reusable/Reusable-Input.vue";
const pinia = createPinia()

const app = createApp(App)
    app
        .directive('if-auth', if_auth)
        .use(router)
        .use(pinia)
        .component("ReusableButton", ReusableButton)
        .component("ReusableInput", ReusableInput)
        .mount('#app')
