<template>
  <div>
    <h1>Создание контрагента</h1>
    <div class="section">
      <div class="container">
        <div class="column is-one-third">
          <div class="control mb-4">
            <label class="label">Название</label>
            <input
              id="name"
              class="input"
              type="text"
              name="name"
              placeholder="Например, ООО «Ромашка»"
              v-model="companyData.name"
            />
          </div>
          <div class="control mb-4">
            <label class="label">ИНН</label>
            <input
              id="inn"
              class="input"
              type="text"
              name="inn"
              placeholder="Для организаций – 10, а для ИП – 13 цифр"
              v-model="companyData.inn"
            />
          </div>
          <div class="buttons">
            <button class="button" @click="$router.back()">Отмена</button>
            <button class="button is-info" @click="createCompany">
              Создать
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
      companyData: {
        name: "",
        inn: null,
      },
    };
  },

  methods: {
    async createCompany() {
      await axios
        .post("http://127.0.0.1:5000/api/company", this.companyData)
        .then((response) => {
          this.$emit("isSuccessfullyCreated");
          this.$router.back();
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
