import {NewNote} from "@/types.ts";
import axios, {AxiosResponse} from "axios";
import {useNoteStore} from "@/pinia/noteStore.ts";
import {useUserStore} from "@/pinia/userStore.ts";

export default  {
    async createNote(newNote: NewNote){
        const response: AxiosResponse = await axios.post('http://localhost:3000/notes', {
            userId: newNote.userId,
            title: newNote.title,
            text: newNote.text,
            tags: newNote.tags,
            dateTime: newNote.dateTime
        })
        const noteStore = useNoteStore()
        const userStore = useUserStore()
        noteStore.notes.push(response.data)
        if(userStore.user.id){
            userStore.user.notes.push(response.data)
            await userStore.updateUser(userStore.user)
        }
    }
}