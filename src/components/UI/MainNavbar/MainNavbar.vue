<script src="./MainNavbar.js" ></script>
<style src="./MainNavbar.css" scoped></style>

<template>
    <div class="main-navbar">
      <div @click="$router.push('/')">
        Современная школа
      </div>
        <ul class="complex_list">
          <li>
            <my-button @click="$router.push('/organizations')"
            >Организации
            </my-button>
          </li>
          <li>
            <my-button @click="$router.push('/about')"
            >Ученику
            </my-button>
          </li>
          <li>
            <my-button style="width: 100%"
                @click="$router.push('/about')"
            >О сайте
            </my-button>
          </li>
          
        </ul>
    </div>
</template>

