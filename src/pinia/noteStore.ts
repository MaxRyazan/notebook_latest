import {Note} from "@/types.ts";
import {defineStore} from "pinia";

export const useNoteStore = defineStore('noteStore',{
    state: () => ({
        notes: [] as Note[] | undefined
    }),
})