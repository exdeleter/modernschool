<template>
  <div class="class-form">
    <div class="class-form__content">
      <form @submit.prevent>
        <custom-input
            placeholder="Буква"
            label="Буква"
            v-model="store.data.name"
        ></custom-input>
        <custom-input
            placeholder="Цифра"
            label="Цифра"
            v-model="store.data.number"
        >
        </custom-input>
        <custom-input
            placeholder="Идентификатор учителя"
            label="Идентификатор учителя"
            v-model="store.data.teacherId"
        >
        </custom-input>
        <custom-button
            @click="submitForm"
        >Сохранить
        </custom-button>
      </form>
    </div>
  </div>
</template>

<script>
import { CustomButton, CustomInput } from "@components";
import {onMounted, onUnmounted, toRefs} from "vue";
import { useClassFormStore } from "@store";

export default {
  name: "class-form",
  components: {
    CustomButton,
    CustomInput
  },
  props: {
    id: {
      type: Number,
      required: true,
      default: 0,
    }
  },
  setup(props, {emit}) {
    const { id } = toRefs(props);

    const store = useClassFormStore();

    const { data } = toRefs(store);

    onMounted(() => {
      if (id.value !== 0) {
        store.params = { id }

        store.get();
      }
    })

    onUnmounted(() => {
      store.data = {}
      store.params.id = null;
    })

    function submitForm() {
      store.post();
    }

    return {
      id,
      store,
      data,
      submitForm,
    }
  }
}
</script>

<style scoped>
.class-form {
  @apply flex flex-col flex-wrap pt-4;
}
</style>