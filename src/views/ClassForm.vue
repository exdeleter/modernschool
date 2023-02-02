<template>
  <div class="class-form">
    <h4>Редактирование класса</h4>
    {{ id }}
  </div>
</template>

<script>
import {toRefs} from "vue";

export default {
  name: "class-form",
  props: {
    id: {
      type: Number,
      required: true,
      default: 0,
    }
  },
  setup(props, {emit}) {
    const { id } = toRefs(props);

    return {
      id,
    }
  }
}
</script>

<style scoped>
.class-form {
  display: flex;
  flex-direction: column;
  align-content: center;
  flex-wrap: wrap;
}
</style>