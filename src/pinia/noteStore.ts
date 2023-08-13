import {Note} from "@/types.ts";
import {defineStore} from "pinia";
import noteActions from "@/pinia/actions/noteActions.ts";

export const useNoteStore = defineStore('noteStore',{
    state: () => ({
        notes: [] as Note[]
    }),
    actions: noteActions
})