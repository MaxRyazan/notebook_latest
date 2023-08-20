<template>
    <div class="form_wrapper">
        <transition name="fade">
            <login-userdata @forgot="isForgot=true" v-if="!isForgot"/>
        </transition>
        <transition name="fade">
            <restore-userdata @restore="isForgot=false" @goBack="isForgot=false" v-if="isForgot"/>
        </transition>
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
  margin: 30vh auto 0;
}

.fade-enter-from{
  position: absolute;
  transform: translateX(-50vw);
}
.fade-leave-to{
  position: absolute;
  transform: translateX(50vw);
}
.fade-enter-active,
.fade-leave-active{
  transition: .3s all linear;
}
</style>