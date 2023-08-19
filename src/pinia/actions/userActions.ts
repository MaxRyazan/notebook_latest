import {useUserStore} from "@/pinia/userStore.ts";
import axios, {AxiosResponse} from "axios";
import {IUser, RegData} from "@/types.ts";

export default {
    async login(username: string, password: string){
        const userStore= useUserStore()
        const allUsers: AxiosResponse = await axios.get(`http://localhost:3000/users`)
        const userFromDB = allUsers.data.filter((user: IUser) => user.username === username)[0]
        if(!userFromDB) return
        console.log(userFromDB.password)
        console.log(password)
        if(userFromDB.password !== password) return
        Object.assign(userStore.user, userFromDB)
        console.log(userStore.user)
    },

    async registration(regData: RegData){
        const userStore= useUserStore()
        const allUsers: AxiosResponse = await axios.get(`http://localhost:3000/users`)
        const userFromDB = allUsers.data.filter((user: IUser) => user.username === regData.username)[0]
        if(userFromDB) return
        const response: AxiosResponse = await axios.post(`http://localhost:3000/users`, {
            username: regData.username,
            password: regData.password,
            secretWord: regData.secretWord,
            notes: regData.notes
        })
        userStore.user = response.data
    },

    async updateUser(user: IUser){
        await axios.patch(`http://localhost:3000/users/${user.id}`, {
            notes: user.notes
        })
    },

    async getById(userId: number): Promise<IUser>{
        const result: AxiosResponse = await axios.get(`http://localhost:3000/users/${userId}`)
        return result.data
    }
}