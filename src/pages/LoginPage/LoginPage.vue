<script src="./LoginPage.js" lang="js"></script>
<style src="./LoginPage.css" scoped></style>

<template>
  <div class="login-page">
    <div class="login-page__empty"></div>
    <div class="login-page__form" v-if="!isRegisterVisible">
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
        <custom-button @click="Register"
        >
          Регистрация
        </custom-button>
      </div>
      <p>{{store.data}}</p>
    </div>
    <div class="login-page-form" v-else>
      <p class="login-page__header">Регистрация</p>
      <custom-input
          placeholder="Логин"
          v-model="log"
      >
      </custom-input>
      <custom-input
          placeholder="Пароль"
          v-model="pass"
          type="password"
      ></custom-input>
      <custom-input
          placeholder="Введите пароль еще раз"
          v-model="repeatPass"
          type="password"
      ></custom-input>
      <p v-if="isValid">Пароли не совпадают. Введите пароль повторно</p>
      <div v-else></div>
      <custom-button
          @click="onRegister"
      >
        Регистрация
      </custom-button>
    </div>
  </div>
</template>

