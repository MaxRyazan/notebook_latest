<template>
    <div class="form_wrapper">
        <registration-component @submitForm="registr"/>
    </div>
</template>

<script setup lang="ts">
import RegistrationComponent from "@components/single-use-component/RegistrationComponent.vue";
import {IUser, RegData} from "@/types.ts";
import {useRouter} from "vue-router";
import {getLastUserId, saveUserToLocalStorage} from "@/localStorageMethods.ts";
import {baseURL} from "@/router/v-router.ts";
const router = useRouter()
async function registr(regData: RegData){
    const newUser: IUser = {
        id: getLastUserId() + 1,
        username: regData.username,
        password: regData.password,
        notes: []
    }
    saveUserToLocalStorage(newUser)
    await router.push(`${baseURL}/main`)
}
</script>
<style lang="scss" scoped>
.form_wrapper {
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 50vh auto 0;
  transform: translateY(-20vh);
}
</style>