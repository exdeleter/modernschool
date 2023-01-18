<script src="./LoginPage.js" lang="js"></script>
<style src="./LoginPage.css" scoped></style>

<template>
  <div class="container">
    <div class="login-page">
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
            :label="Тест"
            placeholder="Логин"
            v-model="log"
        ><template #icon>
          <svg aria-hidden="true" class=" h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </template>
        </custom-input>
        <custom-input
            :icon="true"
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
  </div>
</template>

