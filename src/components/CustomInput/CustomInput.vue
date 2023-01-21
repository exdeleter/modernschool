<script src="./CustomInput.js"></script>
<style src="./CustomInput.css" scoped></style>

<template>
  <div class="custom-input">
    <div class="custom-input__wrapper">
      <div class="custom-input__placeholder" v-if="true">
        <p>{{ label }}</p>
      </div>
      <div class="custom-input__input">
        <div class="custom-input__icon" v-if="true">
          <slot name="icon"></slot>
        </div>
        <input
            class="input"
            :type=type
            :value="modelValue"
            @input="updateInput"
            :placeholder="placeholder"
        >
      </div>
    </div>
  </div>
</template>