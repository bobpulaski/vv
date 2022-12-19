<template>
  <div>
    <div id="create-edit-modal" class="modal">
      <div class="modal-background"></div>
      <div class="modal-card column is-3">
        <header class="modal-card-head">
          <p class="modal-card-title">Добавить единицу измерения</p>
          <button
            class="delete"
            aria-label="close"
            v-on:click="hideModal"
          ></button>
        </header>
        <section class="modal-card-body">
          <!-- Content ... -->
          <label class="label">Наименование</label>
          <input
            id="measure-name"
            class="input column"
            type="text"
            name="name"
            placeholder="Например, сантиметр"
            v-model="measureData.name"
          />
          <label class="label mt-4">Обозначение</label>
          <input
            id="measure-short-name"
            class="input column is-4"
            type="text"
            name="name"
            placeholder="см"
            v-model="measureData.short_name"
          />
        </section>
        <footer class="modal-card-foot is-justify-content-flex-end">
          <button class="button is-primary" @click="createMeasure()">
            Сохранить
          </button>
          <button
            id="closeButton"
            class="button is-dark"
            v-on:click="hideModal"
          >
            Отмена
          </button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CreateEditModal",

  data() {
    return {
      measureData: {
        name: "",
        short_name: "",
      },
    };
  },

  props: {
    modalType: String,
    modalTitle: String,
  },

  methods: {
    hideModal() {
      this.measureData.name = "";
      this.measureData.short_name = "";
      let modalWindow = document.getElementById("create-edit-modal");
      modalWindow.classList.remove("is-active");
    },

    async createMeasure() {
      await axios.post("http://127.0.0.1:5000/api/measures", this.measureData);
    },
  },

  mounted() {
    document.body.addEventListener("keyup", function (e) {
      if (e.key == "Escape") {
        document.getElementById("closeButton").click();
      }
    });
  },
};
</script>

<style lang="scss" scoped></style>
