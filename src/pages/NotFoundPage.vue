<template>
  <div class="not-found-page">
   <p> Данная страница не найдена: <b>{{ $route.path}}</b> </p>
  </div>
</template>

<script>

export default {
  name: "not-found-page",
  setup() {
    return {

    }
  }
}
</script>

<style scoped>
.not-found-page {
  @apply text-xl font-bold;
  text-align: center;
}

</style>