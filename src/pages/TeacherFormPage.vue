<template>
  <div class="teacher-form-page">
    <div class="teacher-form-page__toolbar">
    </div>
    <div class="teacher-form-page__content">
      <custom-input placeholder="Имя" :modelValue="data?.name"></custom-input>
      <custom-input placeholder="Фамилия" :modelValue="data?.surname"></custom-input>
      <custom-input placeholder="Отчество" :modelValue="data?.patronymic"></custom-input>
    </div>
    <custom-button @click="add"></custom-button>
    <p> {{store}}</p>
  </div>
</template>

<script>
import {
  CustomTable,
  CustomInput,
  CustomButton,
} from "@components";

import { useTeacherStore} from "@store";
import {onMounted, toRefs} from "vue";

export default {
  name: "teacher-form-page",
  components: {
    CustomButton,
    CustomInput,
    CustomTable
  },
  props: {
    id: {
      default: 0,
      type: Number,
    }
  },
  setup(props, {emit}) {
    const { id } = toRefs(props);

    const store = useTeacherStore();
    const { data } = toRefs(store);

    onMounted( () => {
      if (id.value != 0) {
        store.get({ id });
      }
    })

    function add(){
      store.post();
    }

    function loadTeacher(num) {

    }
    return {
      id,
      loadTeacher,
      store,
      data,
      add,
    }
  }
}
</script>

<style scoped>

.teacher-form-page__content {
  @apply grid grid-cols-2
}
</style>