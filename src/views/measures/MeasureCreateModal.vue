<template>
  <div>
    <div id="create-modal" class="modal">
      <div class="modal-background"></div>
      <div class="modal-card column is-3">
        <header class="modal-card-head">
          <p class="modal-card-title">Добавить единицу измерения</p>
          <button class="delete" aria-label="close" @click="toHide"></button>
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
            v-model="measureData.title"
          />
          <label class="label mt-4">Обозначение</label>
          <input
            id="measure-short-name"
            class="input column is-4"
            type="text"
            name="name"
            placeholder="см"
            v-model="measureData.full_title"
          />
        </section>
        <footer class="modal-card-foot is-justify-content-flex-end">
          <button class="button is-primary" @click="toCreate">Сохранить</button>
          <button class="button close-button is-dark" @click="toHide">
            Отмена
          </button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import { onEscapePress } from "../../utils/keysevents";

export default {
  name: "MeasureCreateModal",

  data() {
    return {
      measureData: {
        title: "",
        full_title: "",
      },
    };
  },

  props: {
    title: String,
  },

  methods: {
    toHide() {
      this.measureData.title = "";
      this.measureData.full_title = "";
      let modalWindow = document.getElementById("create-modal");
      modalWindow.classList.remove("is-active");
    },

    toCreate() {
      this.$emit("emitOnMeasureCreateModal", this.measureData);
      this.toHide();
    },
  },

  mounted() {
    onEscapePress();
  },
};
</script>

<style lang="scss" scoped></style>
