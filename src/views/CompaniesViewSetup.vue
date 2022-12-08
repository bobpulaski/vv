<template>
  <div class="">
    <h1>Comapnies</h1>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Id</th>
          <th>Name</th>
          <th>Inn</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody
        v-for="(company, index) of state.companies"
        v-bind:key="company.id"
      >
        <tr>
          <td>{{ index + 1 }}</td>
          <td>{{ company.id }}</td>
          <td>{{ company.name }}</td>
          <td>{{ company.inn }}</td>
          <td><button v-on:click="showAlert(company.id)"></button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, reactive } from "vue";

const showAlert = (id) => {
  alert(id)
}

const state = reactive({
  companies: [],
});

onMounted(async () => {
  await axios.get("http://127.0.0.1:5000/api/company").then((response) => {
    state.companies = response.data;
  });
});

// function getAllCompanies() {
//   fetch("http://127.0.0.1:5000/api/company")
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// }
</script>

<style lang="scss" scoped></style>
