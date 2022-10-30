<template>
  <div class="custom-table-cell-editor">
    <input 
        class="custom-table-cell-editor__input" 
        type="text"
        :value="value"
        @input="updateInput"
    >
  </div>
</template>

<script>
import {toRefs} from "vue";

export default {
  name: "custom-table-cell-editor",
  props: {
    value: {
      default: "", 
      required: true,
      type: String
    }
  },
  setup(props, { emit }) {
    const { value } = toRefs(props)
    
    function updateInput(event) {
      emit('update:modelValue', event.target.value)
    }
    
    return {
      value,
      updateInput,
    }
  }
}
</script>

<style scoped>

.custom-table-cell-editor {
  @apply w-4 bg-gray-400 gap-2;
  width: 100%;
  
}
.custom-table-cell-editor__input {
  @apply p-2 border-2;
  width: 100%;
}

.custom-table-cell-editor__input:active {
  @apply border-4 bg-gray-300;
}

</style>