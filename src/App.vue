<script>
import { MainNavbar } from "@components";

export default {
  components : {
    MainNavbar,
  }
}
</script>
<style>
  * {
    margin: 0;
    padding: 0;
  }

  .main {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  #content {
    flex-grow: 3;
    position: relative;
    display: block;
    min-width: 960px;
    min-height: 700px;
  }
</style>

<!-- некоторая разметка -->
<template>
  <div class="main">
    <div id="navbar">
      <main-navbar>
      </main-navbar>
    </div>
    <div id="content">
      <router-view/>
    </div>
  </div>
</template>
