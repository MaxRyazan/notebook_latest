import {defineStore} from "pinia";
import {IUser} from "@/types";

export const useUserStore = defineStore('useUserStore', {
    state: () => ({
        user: {} as IUser
    })
})