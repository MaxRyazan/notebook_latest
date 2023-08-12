<template>
    <div class="form_wrapper">
        <login-userdata @forgot="isForgot=true" v-if="!isForgot"/>
        <restore-userdata @restore="isForgot=false" @goBack="isForgot=false" v-if="isForgot"/>
    </div>
</template>

<script setup lang="ts">
import RestoreUserdata from "@/components/single-use-component/RestoreUserdata.vue";
import LoginUserdata from "@/components/single-use-component/LoginUserdata.vue";
import {ref} from "vue";

const isForgot = ref(false)

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