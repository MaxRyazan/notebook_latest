<template>
    <form class="login_wrapper" @submit.prevent="login">
        <reusable-input v-model="userData.username" :errors="v$.username.$errors" width="300px" no_border label="Имя пользователя:" autofocus/>
        <reusable-input v-model="userData.password" :errors="v$.password.$errors" width="300px" no_border label="Пароль:" type-password/>
        <div class="buttons_wrapper">
            <reusable-button round_violet width="100px" type="submit">Войти</reusable-button>
            <reusable-button round_warning width="150px" @push="$emit('forgot')">Забыли пароль?</reusable-button>
        </div>
    </form>
</template>
<script setup lang="ts">
import {computed, ref, Ref} from "vue";
import {LoginData} from "@/types.js";
import {helpers} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import {useUserStore} from "@/pinia/userStore.ts";
import {useRouter} from "vue-router";
const router = useRouter()

defineEmits(['forgot'])
const userData: Ref<LoginData> = ref({
    username: '',
    password: ''
})
const validate = computed(() => {
    return {
        username: {
            usernameValidator: helpers.withMessage('Минимальная длина 3 символа!', usernameValidator)
        },
        password: {
            passwordValidator: helpers.withMessage('Минимальная длина 7 символов, без пробелов!', passwordValidator)
        }
    }
})
const usernameValidator = (value: string) => {
    return value.length > 2
}
const passwordValidator = (value: string) => {
    return value.length > 6 && !value.includes(" ")
}
const v$ = useVuelidate(validate, userData)
async function login() {
    const userStore = useUserStore()
    const isValid = await v$.value.$validate()
    if(!isValid)return
    await userStore.login(userData.value.username, userData.value.password)
    await router.push('/')
}

</script>
<style lang="scss" scoped>
.login_wrapper {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.buttons_wrapper {
  display: flex;
  gap: 30px;
}

</style>