<script src="./TeacherPage.js" ></script>
<style src="./TeacherPage.css" scoped></style>

<template>
    <div class="teacher-page">
      <div class="teacher-page__login">
        <div>
          <p>Логин</p>
          <custom-input  
              v-model="log"
          >
          </custom-input>
          <p>Пароль</p>
          <custom-input 
              v-model="pass">
          </custom-input>
          <custom-button @click="() => log === 'test' && pass === 'test' ? $router.push('/classes-page') : isVisible = true">
            Войти
          </custom-button>
        </div>
        <div v-if="isVisible">
          <span>
            Вы ввели неправильный пароль
          </span>
        </div>
        <div v-else></div>
      </div>
    </div>
</template>


