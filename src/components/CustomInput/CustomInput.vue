<script src="./CustomInput.js"></script>
<style src="./CustomInput.css" scoped></style>

<template>
  <div class="custom-input">
    <p>{{ label }}</p>
    <input
        class="input"
        :type=type
        :value="modelValue"
        @input="updateInput"
        :placeholder="placeholder"
    >
  </div>
</template>