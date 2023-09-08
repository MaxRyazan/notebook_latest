<script setup lang="ts">
import {useNoteStore} from "@/pinia/noteStore.ts";
import {computed, onMounted, Ref, ref, watch} from "vue";
import {Note} from "@/types.ts";
import {normalizeTime} from "@/typescript/helpers.ts";
import ReusableButton from "@reusable/ReusableButton.vue";

const noteStore = useNoteStore()

defineEmits<{ (e: 'closeWindow'): void }>()
const props = defineProps <{ tag: string }>()

const filteredNotes: Ref<Note[]> = ref([])

onMounted(() => {
    filteredNotes.value = noteStore.notes.filter(note => note.tags.includes(props.tag))
})
const getPropTag = computed(() => {
    return props.tag
})
watch(getPropTag, () => {
    filteredNotes.value = noteStore.notes.filter(note => note.tags.includes(getPropTag.value))
})
</script>

<template>
    <div class="filtered_notes">
        <reusable-button @push="$emit('closeWindow')" style="position: absolute; right: 2px; top: 2px" close_warning>x</reusable-button>
        <div class="filter_tag-wrapper">
            <span style="cursor: default">Все заметки с тегом </span>
            <span class="filter_tag">{{ props.tag }}:</span>
        </div>
        <div v-for="note in filteredNotes" :key="note.dateTime">
            <div class="filter_line">
                <span>{{ note.title }}</span>
                <span>{{ normalizeTime(note.dateTime) }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.filtered_notes {
  position: relative;
  min-width: 320px;
  width: 60%;
  margin-right: 27px;
  border: 2px solid $primaryWarning;
  padding: 10px;
  background-color: white;
  z-index: 99;
}

.filter_tag {
  color: $primaryError;
  cursor: pointer;
}
.filter_tag-wrapper{
  margin-bottom: 20px;
}
.filter_line {
  padding: 4px 0;
  display: flex;
  gap: 20px;
  margin-bottom: 3px;
  cursor: pointer;
  justify-content: space-between;
}
</style>