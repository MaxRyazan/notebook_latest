import {NewNote} from "@/types.ts";
import axios, {AxiosResponse} from "axios";
import {useNoteStore} from "@/pinia/noteStore.ts";
import {useUserStore} from "@/pinia/userStore.ts";

export default  {
    async createNote(newNote: NewNote){
        const noteStore = useNoteStore()
        const userStore = useUserStore()
        const response: AxiosResponse = await axios.post('http://localhost:3000/notes', {
            userId: newNote.userId,
            title: newNote.title,
            text: newNote.text,
            tags: newNote.tags,
            dateTime: newNote.dateTime
        })
        noteStore.notes.push(response.data)
        if(userStore.user.id){
            userStore.user.notes.push(response.data)
            await userStore.updateUser(userStore.user)
        }
    },

    async getNotes() {
        const response: AxiosResponse = await axios.get('http://localhost:3000/notes')
        return response.data
    }
}