<template>
  <div class="day-view">
    <div class="day-view__header">
      Сегодня: {{ day.toLocaleDateString() }}
    </div>
    <div class="day-view__content">
      <custom-table
      :data="store.data"
      :columns="columns">
      </custom-table>
    </div>
    <p></p>
  </div>

</template>

<script>
import { toRefs, watch} from "vue";
import { CustomTable } from "@components";
import { useProblemStore } from "@store";
import { getDate } from "@/helpers";

export default {
  name: "day-view",
  components: { CustomTable },
  props: {
    day: {
      default: null,
      type: Date
    }
  },
  setup(props) {
    const { day } = toRefs(props);

    const store = useProblemStore();

    const columns = [
      {
        name: 'name',
        label: 'Наименование',
      },
      {
        name: 'description',
        label: 'Домашняя работа',
      },
      {
        name: 'score',
        label: 'Оценка',
      },
    ]



    watch(day,
        () => {
          store.params = {
            studentID: 2,
            date: getDate(day.value),
          }

          store.Get();
        },
        { deep: true }
    )

    return {
      day,
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