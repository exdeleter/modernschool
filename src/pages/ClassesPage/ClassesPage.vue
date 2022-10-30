<script src="./ClassesPage.js" ></script>
<style src="./ClassesPage.css" scoped></style>

<template>
    <div class="classes-page">
      <custom-table
        :data="data"
        :columns="columns"
      >
        <template #count="{ item, value, updateItem }">
          <custom-table-cell-editor 
              :value="value"
              :modelValue="updateItem"
          >
          </custom-table-cell-editor>
        </template>
      </custom-table>
     </div>
</template>


