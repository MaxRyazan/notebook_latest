<script setup lang="ts">
import {IUser, Note} from "@/types.ts";
import {computed, onMounted, ref, Ref} from "vue";
import {getOneUserById} from "@/localStorageMethods.ts";

const author: Ref<IUser | undefined> = ref({} as IUser | undefined)
const props = defineProps<{
    singleNote: Note
}>()

const dateTime = computed(() => {
    const propDate = new Date(props.singleNote.dateTime)
    const day = propDate.getDate()
    const month = (propDate.getMonth() + 1) < 10 ? '0' + (propDate.getMonth() + 1) : (propDate.getMonth() + 1)
    const year = propDate.getFullYear()
    const hour = propDate.getHours() < 10 ? '0' + propDate.getHours() : propDate.getHours()
    const min =  propDate.getMinutes() < 10 ? '0' + propDate.getMinutes() : propDate.getMinutes()
    return day + '-' + month + '-' + year + " " + hour + ':' + min
})
onMounted(async () => {
    author.value = getOneUserById(props.singleNote.userId)
})
</script>

<template>
    <div class="card_wrapper">
        <div class="note_item">
            <span>Теги: </span>
            <span v-for="tag in singleNote.tags" :key="tag">{{ tag }}</span>
        </div>
        <div class="note_item note_title">{{ singleNote.title }}</div>
        <div class="note_item note_text">
            {{ singleNote.text }}
            <div class="hide_content"></div>
        </div>

        <div class="note_item note_footer">
            <span>Заметка от: {{dateTime }}</span>
            <span>{{author?.username? 'Автор: '+author?.username: 'Автор неизвестен'}}</span>
        </div>
    </div>
</template>

<style scoped lang="scss">
.card_wrapper {
  position: relative;
  width: 500px;
  height: 300px;
  margin: 0 auto;
  border: 2px solid $primaryViolet;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: hidden;
  @media (max-width: 639px) {
    width: 300px;
  }
}
.hide_content{
  width: 100%;
  height: 55px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 1));
  position: absolute;
  bottom: 35px;
}
.note_item{
  width: 100%;
  text-align: center;
  & span {
    padding: 0 10px;
    border-bottom: 2px solid $primaryViolet;
  }
}
.note_footer{
  position: absolute;
  bottom: 10px;
}
.note_title{
  overflow: hidden;
  height: 20px;
}
.note_text{
  overflow: hidden;
  height: 65%;
}
</style>