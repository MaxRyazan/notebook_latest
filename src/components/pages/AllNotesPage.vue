<template>
    <div class="wrapper">
        <div ref="allNotesWrapper" class="item all_notes_wrapper">
            <reusable-note-card
                    @show-all-notes-with-that-tag="filterByTag"
                    v-for="note in noteStore.notes" :key="note.id" :singleNote="note"/>
        </div>
        <transition name="fade">
            <filtered-notes-window class="item_list" @close-window="filter=''" :tag="filter" v-if="filter.length"/>
        </transition>
    </div>
</template>

<script setup lang="ts">
import {useNoteStore} from "@/pinia/noteStore.ts";
import {onMounted, ref} from "vue";
import ReusableNoteCard from "@reusable/ReusableNoteCard.vue";
import {getAllNotesFromLS} from "@/localStorageMethods.ts";
import FilteredNotesWindow from "@components/single-use-component/FilteredNotesWindow.vue";

const noteStore = useNoteStore()
const filter = ref('')
const allNotesWrapper = ref()
onMounted(() => {
    noteStore.notes = getAllNotesFromLS()
})

function filterByTag(tagName: string) {
    filter.value = tagName
}


</script>
<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-items: start;
}

.all_notes_wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: start;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateX(200px);
}

.fade-enter-active,
.fade-leave-active {
  transition: .4s linear;
}
</style>