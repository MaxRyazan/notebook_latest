import { createApp } from 'vue'
import './scss/style.scss'
import App from './App.vue'
import router from "@/router/v-router";
import {createPinia} from "pinia";
import {if_auth} from "@/directives/if_auth";
import ReusableButton from "@/components/reusable/ReusableButton.vue";
import ReusableInput from "@/components/reusable/Reusable-Input.vue";
import ReusableTextArea from "@reusable/ReusableTextArea.vue";
const pinia = createPinia()

const app = createApp(App)
    app
        .use(pinia)
        .use(router)
        .directive('if-auth', if_auth)
        .component("ReusableButton", ReusableButton)
        .component("ReusableInput", ReusableInput)
        .component("ReusableTextArea", ReusableTextArea)
        .mount('#app')
