<template>
  <div class="day-view">
    <div class="day-view__header">
      Сегодня: {{ day.toLocaleDateString() }}
    </div>
    <div class="day-view__content">
      <custom-table
      :data="store.data"
      :columns="columns">
        <template #subject="{ item, value, updateItem }">
          {{ value.name }}
        </template>
        <template #description="{ item, value, updateItem }">
          {{ value }}
        </template>
      </custom-table>
    </div>
    <p></p>
  </div>

</template>

<script>
import {onMounted, reactive, ref, toRefs} from "vue";
import { CustomTable } from "@components";
import { useProblemStore } from "@store";

export default {
  name: "day-view",
  components: {CustomTable},
  props: {
    day: {
      default: null,
      type: Date
    }
  },
  setup(props) {
    const { day } = toRefs(props);

    const data = [
      {
        number: "1",
        name: "Физкультура",
        homework: "Сдать норматив"
      }
    ];

    const columns = [
      {
        name: 'number',
        label: "№",
      },
      {
        name: 'subject',
        label: 'Наименование',
      },
      {
        name: 'description',
        label: 'Домашняя работа',
      },
      {
        name: 'mark',
        label: 'Оценка',
      },
    ]

    const store = useProblemStore();

    onMounted(() => {
      debugger;
      store.params = {
        studentID: "1",
        date: '2023-01-23 19:42:41.677 +0300',
      }

      store.Get();
    })
    return {
      day,
      data,
      columns,
      store
    }
  }
}
</script>

<style scoped>
.day-view {
  @apply p-2;
  height: 100%;
}

.day-view__header {
  @apply text-lg text-center
}

.day-view__content {
}
</style>