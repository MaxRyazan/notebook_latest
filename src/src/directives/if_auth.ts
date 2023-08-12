import {Directive} from "vue";
import {useUserStore} from "@/pinia/userStore";

export const if_auth: Directive<HTMLElement, string> = {
    mounted(el: HTMLElement){
        const userStore = useUserStore()
        if(!userStore.user.id){
            el.style.display = 'none'
        }
    }
}