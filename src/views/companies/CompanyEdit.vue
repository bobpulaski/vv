<template>
  <div>
    <div class="section">
      <div class="container">
        <header-h1>Редактирование контрагента</header-h1>
        <div class="column is-one-third">
          <div class="control mb-4">
            <label class="label">Название</label>
            <input
              id="name"
              class="input"
              type="text"
              name="name"
              v-model="company.name"
            />
          </div>
          <div class="control mb-4">
            <label class="label">ИНН</label>
            <input
              id="inn"
              class="input"
              type="text"
              name="inn"
              v-model="company.inn"
            />
          </div>
          <div class="buttons">
            <button class="button" @click="$router.back()">Отмена</button>
            <button class="button is-info" @click="updateCompany()">
              Сохранить
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      company: [],
    };
  },

  methods: {
    async getCompanyById(id = this.$route.params.id) {
      await axios
        .get("http://127.0.0.1:5000/api/company/" + id)
        .then((response) => {
          this.company = response.data[0];
        });
    },

    async updateCompany(id = this.$route.params.id) {
      await axios
        .put("http://127.0.0.1:5000/api/company/update/" + id, this.company)
        .then((response) => {
          this.$router.push({ name: "companies" });
        });
    },
  },

  mounted() {
    this.getCompanyById();
  },
};
</script>

<style></style>
