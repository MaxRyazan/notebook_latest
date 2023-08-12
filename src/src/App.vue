<script setup lang="ts">
import TheNavigation from "@/components/single-use-component/TheNavigation.vue";
</script>

<template>
    <the-navigation />
    <div class="main_container">
        <router-view v-slot="{ Component }">
            <transition name="rout">
                <component :is="Component" />
            </transition>
        </router-view>
    </div>
</template>

<style scoped lang="scss">
.main_container{
  max-width: 1700px;
  margin: 0 auto;
}
.rout-enter-from{
  opacity: 0;
}
.rout-leave-to{
  opacity: 0;
}
.rout-enter-active,
.rout-leave-active{
  transition: all .25s linear;
}
</style>
