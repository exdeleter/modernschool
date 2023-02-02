<template>
  <div class="class-view">
    <div class="class-view__top-bar">
      <custom-button>
        Добавить
      </custom-button>
    </div>
    <modal-window v-model:show="isVisible">
      <class-form
          :id="selectedId"
      >
      </class-form>
    </modal-window>
    <div class="class-view__content">
      <custom-table
          :columns="columns"
          :data="store.data"
      >
        <template #edit="{ item }">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"
               @click="openForm(item.id)">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
          </svg>
        </template>
        <template #teacher="{ value }">
          {{ [value?.surname, value?.name, value?.patronymic].join(" ") }}
        </template>
      </custom-table>
    </div>
  </div>
</template>

<script>
import { CustomTable, ModalWindow, CustomButton } from "@components";
import { useClassStore } from "@store";
import {onMounted, ref} from "vue";
import { ClassForm } from "@views";

export default {
  components: {
    CustomTable,
    ClassForm,
    ModalWindow,
    CustomButton
  },
  name: "class-view",
  setup() {
    const store = useClassStore();

    const selectedId = ref(null);
    const isVisible = ref(false)

    const columns = [
      {
        label : "",
        name: "edit",
        class: "w-4"
      },
      {
        name: 'name',
        label: 'Буква',
      },
      {
        name: 'number',
        label: 'Класс',
      },
      {
        name: 'teacher',
        label: 'Классный руководитель',
      },
    ]

    onMounted(() => {
      store.Get();
    })

    function openForm(id) {
      debugger;
      selectedId.value = id;
      isVisible.value = !isVisible.value
    }

    return {
      columns,
      store,
      isVisible,
      openForm,
      selectedId,
    }
  }
}
</script>

<style scoped>
.class-view {
  @apply h-full flex flex-col
}

.class-view__top-bar {
}


.class-view__content {
}
</style>