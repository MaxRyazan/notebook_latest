<template>
    <form class="new_data_wrapper" @submit.prevent="submitForm">
        <reusable-input v-model="regData.username" :errors="v$.username.$errors" width="300px" no_border label="Введите логин:"/>
        <reusable-input v-model="regData.password" :errors="v$.password.$errors" width="300px" type-password no_border label="Введите пароль:"/>
        <reusable-input v-model="regData.confirmPassword" :errors="v$.confirmPassword.$errors" width="300px" type-password no_border label="Введите пароль еще раз:"/>
        <reusable-input v-model="regData.secretWord" :errors="v$.secretWord.$errors" width="300px" no_border label="Введите секретное слово:"/>
        <reusable-button width="250px" round_violet>Дальше</reusable-button>
    </form>
</template>
<script setup lang="ts">
import {RegData} from "@/types.ts";
import {computed, ref, Ref} from "vue";
import {helpers} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";

const emits = defineEmits(['submitForm'])
const regData: Ref<RegData> = ref({
    username: '',
    password: '',
    confirmPassword: '',
    secretWord: '',
    notes: []
})
async function submitForm(){
    const isValid = await v$.value.$validate()
    if(!isValid)return
    emits('submitForm', regData.value)
}

const validate = computed(() => {
    return {
        username: {
            usernameValidator: helpers.withMessage('Минимальная длина 3 символа!', usernameValidator)
        },
        password: {
            passwordValidator: helpers.withMessage('Минимальная длина 7 символов, без пробелов!', passwordValidator)
        },
        confirmPassword: {
            confirmPasswordValidator: helpers.withMessage('Пароли не совпадают!', confirmPasswordValidator)
        },
        secretWord: {
            secretWordValidator: helpers.withMessage('Минимальная длина 7 символов!', secretWordValidator)
        }
    }
})
const usernameValidator = (value: string) => {
    return value.length > 2
}
const passwordValidator = (value: string) => {
    return value.length > 6 && !value.includes(" ")
}
const secretWordValidator = (value: string) => {
    return value.length > 6
}
const confirmPasswordValidator = (value: string) => {
    return value === regData.value.password
}
const v$ = useVuelidate(validate, regData)
</script>
<style scoped lang="scss">
.new_data_wrapper {
  display: flex;
  flex-direction: column;
  gap: 50px;
}
</style>