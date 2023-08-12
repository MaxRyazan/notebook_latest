<template>
    <form class="login_wrapper" @submit.prevent="login">
        <reusable-input v-model="userData.username" width="300px" no_border label="Имя пользователя:" autofocus/>
        <reusable-input v-model="userData.password" width="300px" no_border label="Пароль:" type-password/>
        <div class="buttons_wrapper">
            <reusable-button round_violet width="100px" type="submit">Войти</reusable-button>
            <reusable-button round_warning width="150px" @push="$emit('forgot')">Забыли пароль?</reusable-button>
        </div>
    </form>
</template>
<script setup lang="ts">
import {ref, Ref} from "vue";
import {LoginData} from "@/types.js";
import {useUserStore} from "@/pinia/userStore.ts";
import {useRouter} from "vue-router";
const router = useRouter()

defineEmits(['forgot'])
const userData: Ref<LoginData> = ref({
    username: '',
    password: ''
})

async function login() {
    const userStore = useUserStore()
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