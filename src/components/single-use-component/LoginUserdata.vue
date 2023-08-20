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
import {useRouter} from "vue-router";
import {helpers} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import {findByCredentials} from "@/localStorageMethods.ts";
import {baseURL} from "@/router/v-router.ts";
import {useUserStore} from "@/pinia/userStore.ts";

const router = useRouter()
const userStore = useUserStore()

defineEmits(['forgot'])
const userData: Ref<LoginData> = ref({
    username: '',
    password: ''
})
const validate = computed(() => {
    return {
        username: {
            usernameValidator: helpers.withMessage('Введите логин!', lengthValidator)
        },
        password: {
            passwordValidator: helpers.withMessage('Введите пароль!', lengthValidator)
        },
    }
})
const lengthValidator = (value: string) => {
    return value.length > 0
}
const v$ = useVuelidate(validate, userData)

async function login() {
    const isValid = await v$.value.$validate()
    if(!isValid)return
    const result = findByCredentials(userData.value.username, userData.value.password)
    console.log(result)
    if(result?.id) {
        userStore.user = result
        await router.push(`${baseURL}/main`)
    }
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