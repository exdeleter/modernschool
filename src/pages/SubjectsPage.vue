<template>
  <div class="subjects-page">
    <custom-table
        :data="store.data"
        :columns="columns"
    >
      
    </custom-table>
  </div>
</template>

<script>
import {
  CustomTable,
} from "@components";

import { useSubjectStore } from "@store";
import { onMounted } from "vue";

export default {
  name: "subjects-page",
  components: {CustomTable},
  setup() {
    const store = useSubjectStore();
    const columns = [
      {
        name: 'id',
        label: "Идентификатор",
      },
      {
        name: 'name',
        label: 'наименование',
      },
    ]
    onMounted(() => {
      store.Get();
    })
    return {
      store,
      columns,
    }
  }
}
</script>

<style scoped>

</style>