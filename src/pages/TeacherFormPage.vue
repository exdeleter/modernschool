<template>
  <div class="teacher-form-page">
    <div class="teacher-form-page__toolbar">
    </div>
    <div class="teacher-form-page__content">
      <custom-input label="Введите" placeholder="Имя" v-model="data.name"></custom-input>
      <custom-input placeholder="Фамилия" v-model="data.surname"></custom-input>
      <custom-input placeholder="Отчество" v-model="data.patronymic"></custom-input>
    </div>
    <custom-button @click="add">Добавить</custom-button>
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