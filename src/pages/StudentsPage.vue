<template>
  <div>
    <h1 class="title">Добавление ученика</h1>
  </div>
  <div class="students-page">
    <form>
      <div class="form-group">
        <label for="firstName">Имя:</label>
        <input type="text" id="firstName" v-model="student.firstName">
      </div>
      <div class="form-group">
        <label for="lastName">Фамилия:</label>
        <input type="text" id="lastName" v-model="student.lastName">
      </div>
      <div class="form-group">
        <label for="lastName">Отчество:</label>
        <input type="text" id="patronymic" v-model="student.patronymic">
      </div>
      <div class="form-group">
        <label for="age">Возраст:</label>
        <input type="number" id="age" v-model="student.age">
      </div>
      <div class="form-group">
        <label for="phone">Класс:</label>
        <input type= "text" id="class" v-model="student.classId">
      </div>
      <div class="form-group">
        <label for="phone">Телефон:</label>
        <input type="text" id="phone" v-model="student.phone">
      </div>
      <button @click.prevent="addStudent">Добавить студента</button>
    </form>
  </div>
</template>


<script>
import {
  CustomTable,
  CustomInput,
  CustomButton,
} from "@components";
import { computed } from "vue";

export default {
  data() {
    return {
      student: {
        firstName: "",
        lastName: "",
        patronymic: "",
        age: 0,
        classId: "",
        phone: ""
      }
    }

  },
  methods: {
    async submitForm() {
      const response = await axios.post("/api/student", this.form);
      if (response.status === 201) {
        console.log("Student added successfully");
      } else {
        console.error("Error adding student");
      }
    }
  }
};
</script>



<style>

.title {
  text-align: center;
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 1.5rem;
}
.form-group {
  margin-bottom: 0.5rem;
}
.students-page{
  padding-left: 2%;
}
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type="text"],
input[type="number"] {
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

button {
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: 0.375rem 0.75rem;
  font-size: 4rem;
  line-height: 1.5;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.12);
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.24);
  transition: background 0.2s ease-in-out;
}

button:hover {
  background-color: #0069d9;
}

button:active {
  background-color: #0062cc;
  box-shadow: none;
  transform: translateY(2px);
}

</style>
