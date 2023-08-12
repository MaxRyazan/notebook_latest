import {useUserStore} from "@/pinia/userStore.ts";
import axios, {AxiosResponse} from "axios";
import {IUser} from "@/types.ts";

export default {
    async login(username: string, password: string){
        const userStore= useUserStore()
        const allUsers: AxiosResponse = await axios.get(`http://localhost:3000/users`)
        const userFromDB = allUsers.data.filter((user: IUser) => user.username === username)[0]
        if(!userFromDB) return
        if(userFromDB.password !== password) return
        Object.assign(userStore.user, userFromDB)
    }
}