<script setup lang="ts">
import {IUser, Note} from "@/types.ts";
import {computed, onMounted, ref, Ref} from "vue";
import {getOneUserById} from "@/localStorageMethods.ts";
import {normalizeTime} from "@/typescript/helpers.ts";

const author: Ref<IUser | undefined> = ref({} as IUser | undefined)
const props = defineProps<{
    singleNote: Note
}>()
defineEmits<{
    (e: 'showAllNotesWithThatTag', tag: string): void
}>()

const dateTime = computed(() => {
    return normalizeTime(props.singleNote.dateTime)
})

onMounted(async () => {
    author.value = getOneUserById(props.singleNote.userId)
})
</script>

<template>
    <div class="card_wrapper">
        <div class="note_item">
            <span>Теги: </span>
            <span
                    class="note_item--tag"
                    v-for="tag in singleNote.tags" :key="tag"
                    @click="$emit('showAllNotesWithThatTag',tag)"
            >{{ tag }}</span>
        </div>
        <div class="note_item note_title">{{ singleNote.title }}</div>
        <div class="note_item note_text">
            {{ singleNote.text }}
            <div class="hide_content"></div>
        </div>

        <div class="note_item note_footer">
            <span>Заметка от: {{ dateTime }}</span>
            <span> {{ author?.username ? 'Автор: ' + author?.username : ' Автор неизвестен' }}</span>
        </div>
    </div>
</template>

<style scoped lang="scss">
.card_wrapper {
  cursor: default;
  position: relative;
  width: 500px;
  height: 300px;
  margin: 0 auto;
  border: 2px solid $primaryViolet;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: hidden;

  &:hover {
    border: 2px solid $primaryWarning;
  }

  @media (max-width: 639px) {
    width: 300px;
  }
}

.hide_content {
  width: 100%;
  height: 55px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 1));
  position: absolute;
  bottom: 35px;
}

.note_item {
  width: 100%;
  text-align: center;
}

.note_item--tag {
  margin-right: 15px;
  cursor: pointer;
  padding: 0 5px;
  border-bottom: 2px solid $primaryViolet;

  &:hover {
    color: $primaryWarning;
  }
}

.note_footer {
  position: absolute;
  bottom: 10px;
}

.note_title {
  overflow: hidden;
  height: 20px;
}

.note_text {
  overflow: hidden;
  height: 65%;
}
</style>