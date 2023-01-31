<template>
  <div class="schedule-view">
    <ul class="schedule-view__buttons">
      <li
          v-for="(tab, index) in tabs"
          :key="index"
          :class="['tab-button',
            { active: currentTabComponent.name === tab.name }]"
          @click="change(tab)">{{ tab.name }}
        </li>
      </ul>
    <div class="schedule-view__tabs">
      <component
          :is="currentTabComponent.component"
          class="tab"
          :day="currentTabComponent.name === 'Сегодня'
          ? new Date
          : getNextDay()"
      >
      </component>
    </div>
  </div>
</template>

<script>
import { CustomButton } from "@components";
import { DayView } from "@/views/index";
import {computed, ref} from "vue";
import { getNextDay } from "@/helpers"

export default {
  components: {
    CustomButton,
  },
  name: "schedule-view",
  setup() {
    const tabs = [
      {
        name: "Сегодня",
        component: DayView
      },
      {
        name: "Завтра",
        component: DayView
      },
      {
        name: "Неделя",
        component: DayView
      }
    ]

    const currentTab = ref(tabs[0]);

    const currentTabComponent = computed(() => {
      return currentTab.value
    });


    function change(item) {
      currentTab.value = item;
    }

    return {
      tabs,
      currentTabComponent,
      currentTab,
      change,
      getNextDay
    }
  }

}
</script>

<style scoped>

.schedule-view {
  @apply h-full flex flex-col
}

.schedule-view__tabs {
  height: 100%;

}

.schedule-view__buttons {
  @apply grid grid-cols-3 border-b-2 mr-6 ml-6 mt-2 mb-3
}

.tab-button {
  @apply  p-2 ml-4 mr-4 font-medium text-gray-600 justify-around flex;
}

.tab-button:hover {
  @apply p-2 text-purple-600 border-b-2 border-purple-600;
}

.tab-button.active {
  @apply p-2 ml-4 mr-4 border-b-2 border-purple-600 text-purple-600;
}
</style>