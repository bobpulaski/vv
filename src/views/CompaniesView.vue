<template>
  <div>
    <h1>Companies</h1>
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
      });
    },
  },
};
</script>
