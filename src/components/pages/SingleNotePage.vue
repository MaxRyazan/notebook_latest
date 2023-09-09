<template>
    <div>{{singleNote.text}}</div>
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";
import {onMounted, Ref, ref} from "vue";
import {getAllNotesFromLS} from "@/localStorageMethods.ts";
import {Note} from "@/types.ts";

const route = useRoute()
const singleNote: Ref<Note> = ref({}) as Ref<Note>

onMounted(() => {
    const notes: Note[] = getAllNotesFromLS()
    singleNote.value = notes.find((note: Note) => note.id.toString() === route.params.id) as Note
})

</script>
<style lang="scss" scoped>

</style>