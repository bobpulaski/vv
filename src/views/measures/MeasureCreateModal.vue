<template>
  <div>
    <div id="create-measure-modal" class="modal">
      <div class="modal-background"></div>
      <div class="modal-card column is-3">
        <header class="modal-card-head">
          <p v-if="isCreateOrEdit === 'create'" class="modal-card-title">
            Добавить единицу измерения
          </p>
          <p v-if="isCreateOrEdit === 'edit'" class="modal-card-title">
            Изменить единицу измерения
          </p>

          <button class="delete" aria-label="close" @click="toHide"></button>
        </header>

        <section class="modal-card-body">
          <!-- Create Inputs -->
          <div v-if="isCreateOrEdit === 'create'">
            <label class="label">Обозначение</label>
            <input
              id="measure-title"
              class="input column is-4"
              type="text"
              name="name"
              placeholder="см"
              v-model="this.measureData.title"
            />

            <label class="label mt-4">Наименование</label>
            <input
              id="measure-full-title"
              class="input column"
              type="text"
              name="name"
              placeholder="Например, сантиметр"
              v-model="measureData.full_title"
            />
          </div>

          <!-- Edit Inputs -->
          <div v-if="isCreateOrEdit === 'edit'">
            <label class="label">Обозначение</label>
            <input
              id="measure-title"
              class="input column is-4"
              type="text"
              name="name"
              placeholder="см"
              v-model="measureData.title"
            />

            <label class="label mt-4">Наименование</label>
            <input
              id="measure-full-title"
              class="input column"
              type="text"
              name="name"
              placeholder="Например, сантиметр"
              v-model="measureData.full_title"
            />
          </div>
        </section>

        <!-- Create Buttons -->
        <footer
          v-if="isCreateOrEdit === 'create'"
          class="modal-card-foot is-justify-content-flex-end"
        >
          <button class="button is-primary" @click="toCreate">Сохранить</button>
          <button class="button close-button is-dark" @click="toHideOnCreate">
            Отмена
          </button>
        </footer>

        <!-- Edit Buttons -->
        <footer
          v-if="isCreateOrEdit === 'edit'"
          class="modal-card-foot is-justify-content-flex-end"
        >
          <button class="button is-primary" @click="toUpdate">Изменить</button>
          <button class="button close-button is-dark" @click="toHideOnUpdate">
            Отмена
          </button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import { onEscapeKeyPress } from "../../utils/keysevents";

export default {
  name: "MeasureCreateModal",

  props: {
    measureId: Number,
    measureTitle: String,
    measureFullTitle: String,

    isCreateOrEdit: String,
  },

  data() {
    return {
      measureData: {
        title: "",
        full_title: "",
      },
    };
  },

  watch: {
    measureTitle() {
      this.measureData.title = this.measureTitle;
      this.measureData.full_title = this.measureFullTitle;
    },
  },

  methods: {
    toHideOnCreate() {
      this.measureData.title = ""; //clearing fields depending on the type of window
      this.measureData.full_title = "";
      let modalWindow = document.getElementById("create-measure-modal");
      modalWindow.classList.remove("is-active");
    },

    toHideOnUpdate() {
      // this.measureData.title = this.measureTitle;
      // this.measureData.full_title = this.measureFullTitle;
      let modalWindow = document.getElementById("create-measure-modal");
      modalWindow.classList.remove("is-active");
    },

    toCreate() {
      this.$emit("emitOnMeasureCreateModal", this.measureData);
      this.toHideOnCreate();
    },

    toUpdate() {
      this.$emit("emitOnMeasureUpdateModal", this.measureData);

      this.toHideOnUpdate();
    },
  },

  mounted() {
    onEscapeKeyPress();
  },

  updated() {
    document.getElementById("measure-title").focus();
    //TODO Что-то нужно решать с фокусом на INPUT(не передаётся по причине условного рендеринга - компоненты ещё не в DOM)
  },
};
</script>

<style lang="scss" scoped></style>
