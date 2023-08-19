<template>
    <nav class="nav_wrapper">
        <ul class="nav">
            <router-link :to="`${baseURL}/main`" class="nav_item">Главная страница</router-link>
            <router-link :to="`${baseURL}/notes`" class="nav_item">Все заметки</router-link>
            <router-link :to="`${baseURL}/new`" class="nav_item" v-if-auth>Создать заметку</router-link>
        </ul>
        <ul class="nav_auth">
            <router-link :to="`${baseURL}/login`" class="nav_item" v-if="!userStore.user.id">Войти</router-link>
            <router-link :to="`${baseURL}/registration`" class="nav_item" v-if="!userStore.user.id">Регистрация</router-link>
            <reusable-button round_warning width="100px" v-if="userStore.user.id" @push="logout">Выйти</reusable-button>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import {useUserStore} from "@/pinia/userStore.ts";
import {IUser} from "@/types.ts";
import {baseURL} from "@/router/v-router.ts";
const userStore = useUserStore()
function logout(){
    userStore.user = {} as IUser
}
</script>
<style lang="scss" scoped>
.nav_wrapper{
  height: 40px;
  position: relative;
  width: 100%;
  background-color: $primaryViolet;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  @media (max-width: 640px) {
    height: 60px;
  }
}
.nav{
  height: 100%;
  display: flex;
  width: 50%;
  max-width: 500px;
  align-items: center;
  padding: 0;
  margin: 0;
  justify-content: space-evenly;
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 10px;
  }
}
.nav_auth{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 25%;
  max-width: 500px;
  padding: 0;
  margin: 0;
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 10px;
    width: 40%;
  }
}
.nav_item{
  color: black;
  text-decoration: none;
  cursor: pointer;
  transition: .3s ease all;
  &:hover{
    color: $white;
  }
}
</style>