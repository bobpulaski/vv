<template>
  <div>
    <h1>Редактирование контрагента</h1>
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
            />
          </div>
          <div class="buttons">
            <button class="button" @click="$router.back()">Отмена</button>
            <button class="button is-info">Сохранить</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  methods: {
    async getCompanyById(id = this.$route.params.id) {
      console.log(id);
      await axios
        .get("http://127.0.0.1:5000/api/company/", +194)
        .then((response) => {
          this.company = response.data;
          console.log(this.company);
        });
    },
  },

  mounted() {
    this.getCompanyById();
  },
};
</script>

<style></style>
