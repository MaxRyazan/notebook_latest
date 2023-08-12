<template>
    <div>
        <div class="forgot_wrapper" v-if="!isSecretWordVerify">
            <reusable-input v-model="secretWord" width="300px" no_border label="Введите секретное слово:"/>
            <div class="buttons_wrapper">
                <reusable-button width="150px" round_violet @push="verifySecretWord">Подтвердить</reusable-button>
                <reusable-button width="100px" round_warning @push="$emit('goBack')">Назад</reusable-button>
            </div>
        </div>
        <form class="new_data_wrapper" @submit.prevent="changeUserData" v-else>
            <reusable-input v-model="regData.username" width="300px" no_border label="Введите новый логин:"/>
            <reusable-input v-model="regData.password" width="300px" no_border label="Введите новый пароль:"/>
            <reusable-input v-model="regData.confirmPassword" width="300px" no_border label="Введите пароль еще раз:"/>
            <reusable-button width="250px" round_violet>Изменить и сохранить</reusable-button>
        </form>
    </div>
</template>
<script setup lang="ts">

import {ref, Ref} from "vue";
import {RegData} from "@/types.ts";

const emits = defineEmits(['restore', 'goBack'])
const secretWord: Ref<string> = ref('')
const isSecretWordVerify = ref(false)
const regData: Ref<RegData> = ref({
    username: '',
    password: '',
    confirmPassword: '',
    secretWord: ''
})
function verifySecretWord() {
    //TODO проверка секретного слова
    isSecretWordVerify.value = true
}
function changeUserData() {
    emits('restore')

}
</script>
<style lang="scss" scoped>

.new_data_wrapper,
.forgot_wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
}

.buttons_wrapper{
  display: flex;
  gap: 30px;
}
</style>