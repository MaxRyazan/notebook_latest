<script setup lang="ts">
import TheNavigation from "@/components/single-use-component/TheNavigation.vue";
import {onMounted} from "vue";
import {IUser} from "@/types.ts";
import {getOneUserById, saveUserToLocalStorage} from "@/localStorageMethods.ts";

onMounted(() => {
    if (!getOneUserById(99)) {
        const baseUser: IUser = {
            id: 99,
            username: "Max",
            password: "123456789",
            notes: [],
        }
        saveUserToLocalStorage(baseUser)
    }
})
</script>

<template>
    <the-navigation/>
    <div class="main_container">
        <router-view v-slot="{ Component }">
            <transition name="rout">
                <component :is="Component"/>
            </transition>
        </router-view>
    </div>
</template>

<style scoped lang="scss">
.main_container {
  position: relative;
  max-width: 1700px;
  min-height: calc(100vh - 70px);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.rout-enter-from {
  position: absolute;
  transform: translateX(-50vw);
}

.rout-leave-to {
  position: absolute;
  transform: translateX(50vw);
  opacity: 0;
}

.rout-enter-active,
.rout-leave-active {
  transition: all .25s linear;
}
</style>
