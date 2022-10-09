<script src="./CustomInput.js"></script>
<style src="./CustomInput.css" scoped></style>

<template>
  <input
      class="input"
      type="text"
      :value="modelValue"
      @input="updateInput"
  >
</template>