<template>
    <div>
        <div class="forgot_wrapper" v-if="!isSecretWordVerify">
            <reusable-input v-model="secretWord" width="300px" no_border label="Введите секретное слово:"/>
            <div class="buttons_wrapper">
                <reusable-button width="150px" round_violet @push="verifySecretWord">Подтвердить</reusable-button>
                <reusable-button width="100px" round_warning @push="$emit('goBack')">Назад</reusable-button>
            </div>
        </div>
        <registration-component v-else @submitForm="restoreUser"/>
    </div>
</template>
<script setup lang="ts">

import {ref, Ref} from "vue";
import RegistrationComponent from "@components/single-use-component/RegistrationComponent.vue";

defineEmits(['goBack'])
const secretWord: Ref<string> = ref('')
const isSecretWordVerify = ref(false)
function verifySecretWord() {
    //TODO проверка секретного слова
    isSecretWordVerify.value = true
}
function restoreUser(){

}
</script>
<style lang="scss" scoped>

.buttons_wrapper{
  display: flex;
  gap: 30px;
}
.forgot_wrapper {
  display: flex;
  flex-direction: column;
  gap: 50px;
}
</style>