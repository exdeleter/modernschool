<script src="./MainNavbar.js" ></script>
<style src="./MainNavbar.css" scoped></style>

<template>
    <div class="main-navbar">
      <div @click="$router.push('/')">
        Современная школа
      </div>
        <ul class="complex_list">
          <li>
            <custom-button @click="$router.push('/organizations')"
            >Организации
            </custom-button>
          </li>
          <li>
            <custom-button @click="$router.push('/about')"
            >Ученику
            </custom-button>
          </li>
          <li>
            <custom-button @click="$router.push('/teacher')"
            >Учителю
            </custom-button>
          </li>
          <li>
            <custom-button style="width: 100%"
                @click="$router.push('/about')"
            >О сайте
            </custom-button>
          </li>
        </ul>
    </div>
</template>

