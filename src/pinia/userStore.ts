import {defineStore} from "pinia";
import {IUser} from "@/types";
import userActions from "@/pinia/actions/userActions.ts";

export const useUserStore = defineStore('useUserStore', {
    state: () => ({
        user: {} as IUser
    }),
    actions: userActions
})