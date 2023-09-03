import {Note} from "@/types.ts";
import {defineStore} from "pinia";

export const useNoteStore = defineStore('noteStore',{
    state: () => ({
        notes: [] as Note[]
    }),

    getters:{
        getNoteByTag: (state: any) => {
            //TODO написать реализацию
            console.log(state)
            return ''
        }
    }
})