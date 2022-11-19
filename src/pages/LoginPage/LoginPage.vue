<script src="./LoginPage.js" lang="js"></script>
<style src="./LoginPage.css" scoped></style>

<template>
    <div class="login-page">
      <p class="login-page__head_org">Тестовая организация</p>
      <p class="login-page__header">Вход</p>
      <custom-input
          placeholder="Логин"
          v-model="log"
      >
      </custom-input>
      <custom-input
          placeholder="Пароль"
          v-model="pass"
          type="password"
      >
      </custom-input>
      <div class="login-page__buttons">
        <custom-button class="login-page__button" @click="Login">
          Войти
        </custom-button>
        <p>Регистрация</p>
      </div>
      <p>{{store.data}}</p>
    </div>
</template>

