<script>
import { MainNavbar
} from "@components";

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
  
  .app {
    padding-top: 2rem;
    padding-left: 2rem;
  }
</style>

<!-- некоторая разметка -->
<template>
  <main-navbar>
  </main-navbar>
  <div class="app">
    <router-view>
    </router-view>
  </div>
</template>
