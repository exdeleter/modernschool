﻿<script src="./MainNavbar.js" ></script>
<style src="./MainNavbar.css" scoped></style>

<template>
    <div class="main-navbar">
      <div class="main-navbar__container">
        <div class="flex items-center" @click="$router.push('/')">
          <span class="main-navbar__header">Современная школа</span>
        </div>
        <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="main-navbar__btn">
            <li>
              <a href="#" class="main-navbar__btns" aria-current="page" @click="$router.push('/organizations')" >Организации</a>
            </li>
            <li>
              <a href="#" class="main-navbar__btns" @click="$router.push('/about')" >О сайте</a>
            </li>
            <li>
              <a href="#" class="main-navbar__btns" @click="$router.push('/teacher')">Учителю</a>
            </li>
            <li>
              <a href="#" class="main-navbar__btns" @click="$router.push('/login-page')">Главная</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

