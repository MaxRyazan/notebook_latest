<template>
    <div class="all_notes_wrapper">
        <reusable-note-card v-for="note in noteStore.notes" :key="note.id" :singleNote="note"/>
    </div>
</template>

<script setup lang="ts">
import {useNoteStore} from "@/pinia/noteStore.ts";
import {onMounted} from "vue";
import ReusableNoteCard from "@reusable/ReusableNoteCard.vue";

const noteStore = useNoteStore()

onMounted(async () => {
    noteStore.notes = await noteStore.getNotes()
})
</script>
<style lang="scss" scoped>
.all_notes_wrapper{
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: start;
  align-items: center;
}
</style>