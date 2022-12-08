<template>
  <div>
    <h1>Companies</h1>
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

      <tbody v-for="(company, index) of companies" v-bind:key="company.id">
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

<script>
import axios from "axios";

export default {
  data() {
    return {
      companies: [],
    };
  },

  methods: {
    async getAllComapnies() {
      await axios.get("http://127.0.0.1:5000/api/company").then((response) => {
        this.companies = response.data;
        console.log(this.companies);
      });
    },

    showAlert(id) {
      alert(id);
    },
  },

  mounted() {
    this.getAllComapnies();
  },
};
</script>
