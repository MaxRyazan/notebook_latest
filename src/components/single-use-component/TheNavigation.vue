<template>
    <nav class="nav_wrapper">
        <ul class="nav">
            <router-link to="/" class="nav_item">Главная страница</router-link>
            <router-link to="/notes" class="nav_item">Все заметки</router-link>
            <router-link to="/new" class="nav_item" v-if-auth>Создать заметку</router-link>
        </ul>
        <ul class="nav_auth">
            <router-link to="/login" class="nav_item">Войти</router-link>
            <router-link to="/registration" class="nav_item">Регистрация</router-link>
        </ul>
    </nav>
</template>

<script setup lang="ts">

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