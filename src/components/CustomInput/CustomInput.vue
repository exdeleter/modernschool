<script src="./CustomInput.js"></script>
<style src="./CustomInput.css" scoped></style>

<template>
  <div class="custom-input">
    <p>{{ placeholder }}</p>
    <input
        class="input"
        type="text"
        :value="modelValue"
        @input="updateInput"
    >
  </div>
</template>