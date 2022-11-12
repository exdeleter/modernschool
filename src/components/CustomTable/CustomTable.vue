<script src="./CustomTable.js"></script>
<style src="./CustomTable.css" lang="css" scoped></style>

<template>
    <div class="custom-table">
      <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-400">
          <thead class="text-xs text-white uppercase bg-gray-500">
          <tr>
            <th v-for="col in columns" 
                scope="col" 
                class="custom-table__head__col" 
                :class="col.class">
              {{col.label}}
            </th>
          </tr>
          </thead>
          <tbody>
          <tr
           class="bg-blue-100" 
           v-for="item in data"
          >
            <td 
              class="custom-table__head__cell"
              v-for="prop in columns"
            ><slot
               :name="prop.name"
               :modelValue="item[prop.name]"
               v-bind="{
                 item,
                 value:item[prop.name],
                 updateItem: updateItem,
                 modelValue:item[prop.name]
               }"
            >
              {{item[prop.name]}}
            </slot>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>
