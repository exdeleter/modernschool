<template>
  <div class="container">
    <div class="hub-page">
      <ul class="hub-page__side-bar">
        <li
            v-for="tab in tabs"
            :key="tab.id"
            :class="['hub-page__side-bar__tab',
                { active: currentTabComponent.name === tab.name }]"
            @click="change(tab)"
        >{{ tab.name }}</li>
      </ul>
      <div class="hub-page__main">
        <div class="hub-page__tabs">
          <component :is="currentTabComponent.component" class="tab">
          </component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CustomButton } from "@components";
import {computed, ref} from "vue";
import {LoginPage, NotFoundPage} from "@/pages/index";
import { ScheduleView } from "@/views";
export default {
  name: "hub-page",
  components: {CustomButton},
  setup(props, { emit }) {
    const tabs = [
      {
        name: "Расписание",
        component: ScheduleView
      },
      {
        name: "Мои учители",
        component: NotFoundPage
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
    }
  }
}
</script>

<style scoped>
.container {
  margin: auto;
  height: 100%;
}

.hub-page {
  height: 100%;
  display: flex;
  flex-direction: row;
}

.hub-page__side-bar {
  @apply h-full border-2 border-gray-600 font-medium ;
  width:15%;
}

.hub-page__side-bar__tab {
  @apply p-2 flex justify-around border-b-2 border-gray-300 text-gray-700;
}

.hub-page__side-bar__tab:hover {
  background: #e0e0e0;
}
.hub-page__side-bar__tab.active {
  background: #e0e0e0;
}
.hub-page__main {
  background-color: #f3f3f3;height:100%;width:85%;
  @apply p-6;
}

.hub-page__tabs {
  @apply h-full;
  border: 1px solid #5d5959;
  border-radius: 2px;
  user-select: none;
  overflow-x: auto;
}

.tab-button {
  @apply p-2;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #d32121;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}

.demo-tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>