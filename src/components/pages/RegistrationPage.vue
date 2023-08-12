<template>
    <div class="form_wrapper">
        <registration-component @submitForm="registr"/>
    </div>
</template>

<script setup lang="ts">
import RegistrationComponent from "@components/single-use-component/RegistrationComponent.vue";
import {RegData} from "@/types.ts";
import {useUserStore} from "@/pinia/userStore.ts";
import {useRouter} from "vue-router";
const userStore = useUserStore()
const router = useRouter()
async function registr(regData: RegData){
    await userStore.registration(regData)
    await router.push('/')
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