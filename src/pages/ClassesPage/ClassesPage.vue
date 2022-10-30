<script src="./ClassesPage.js" ></script>
<style src="./ClassesPage.css" scoped></style>

<template>
    <div class="classes-page">
      <custom-table
        :data="data"
        :columns="columns"
      >
        <custom-table-cell-editor 
            #default="{item }"
            :modelValue="data[0].price"
            :value="data[0].price">
          
        </custom-table-cell-editor>
      </custom-table>
      <custom-table-cell-editor
      v-model="data[0].price"
      :modelValue="data[0].price"
      :value="data[0].price"
      >
        
      </custom-table-cell-editor>
     </div>
</template>


