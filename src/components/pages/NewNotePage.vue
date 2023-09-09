<template>
    <div class="new_note_wrapper">
        <div class="new_note">
            <reusable-input no_border width="100%" label="Название заметки:"
                            v-model="title" autofocus/>
            <reusable-input no_border width="100%" label="Тэги:" v-model="tags"/>
            <reusable-text-area height="70%" v-model="text"/>
            <reusable-button @push="createNote" style="align-self: end" width="150px" round_violet>Создать</reusable-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import ReusableInput from "@reusable/Reusable-Input.vue";
import {Ref, ref} from "vue";
import {useUserStore} from "@/pinia/userStore.ts";
import ReusableButton from "@reusable/ReusableButton.vue";

import {getLastNoteId, saveNoteToLocalStorage} from "@/localStorageMethods.ts";

const userStore = useUserStore()

const tags: Ref<string> = ref('')
const title: Ref<string> = ref('')
const text: Ref<string> = ref('')


async function createNote() {
    saveNoteToLocalStorage({
        id: getLastNoteId() + 1,
        userId: userStore.user?.id ? userStore.user.id : 0,
        title: title.value,
        text: text.value,
        tags: transformTags(tags.value),
        dateTime: Date.now(),
    })
    clearFields()
}

function clearFields(){
    title.value = ''
    text.value = ''
    tags.value = ''
    console.log(text.value)
}

function transformTags(stringTags: string): string[] {
    return stringTags.trim().split(" ")
}

</script>
<style lang="scss" scoped>
.new_note_wrapper {
  width: 50%;
  min-width: 800px;
}

.new_note {
  width: 100%;
  min-width: 300px;
  height: 50vh;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}
</style>