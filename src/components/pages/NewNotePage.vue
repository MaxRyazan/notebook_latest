<template>
    <div class="new_note_wrapper">
        <form class="new_note" @submit.prevent="createNote">
            <reusable-input no_border width="100%" label="Название заметки:"
                            v-model="newNote.title" autofocus/>
            <reusable-input no_border width="100%" label="Тэги:" v-model="stringTags"/>
            <reusable-text-area height="70%" v-model="newNote.text"/>
            <reusable-button style="align-self: end" width="150px" round_violet>Создать</reusable-button>
        </form>
    </div>
</template>

<script setup lang="ts">
import ReusableInput from "@reusable/Reusable-Input.vue";
import {Ref, ref} from "vue";
import {Note} from "@/types.ts";
import {useUserStore} from "@/pinia/userStore.ts";
import ReusableButton from "@reusable/ReusableButton.vue";

import {getLastNoteId, saveNoteToLocalStorage} from "@/localStorageMethods.ts";

const userStore = useUserStore()

const stringTags: Ref<string> = ref('')
const newNote: Ref<Note> = ref({
    userId: userStore.user.id ? userStore.user.id : 0,
    title: '',
    tags: [],
    text: '',
    dateTime: 0,
    id: 0
})


async function createNote() {
    Object.assign(newNote.value.tags, transformTags(stringTags.value))
    newNote.value.dateTime = Date.now()
    newNote.value.id = getLastNoteId()
    saveNoteToLocalStorage(newNote.value)
    newNote.value.title = ''
    newNote.value.text = ''
    stringTags.value = ''
}


function transformTags(stringTags: string): string[] {
    return stringTags.trim().split(" ")
}

</script>
<style lang="scss" scoped>
.new_note_wrapper {
  max-width: 1700px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: calc(100vh - 60px);
}

.new_note {
  margin: 0 auto;
  max-width: 800px;
  width: 50%;
  min-width: 300px;
  height: 50vh;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}
</style>