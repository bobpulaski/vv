<template>
  <div>
    <div id="create-measure-modal" class="modal">
      <div class="modal-background"></div>
      <div class="modal-card column is-3">
        <header class="modal-card-head">
          <h1>{{ inputFocusReset }}</h1>
          <p v-show="isCreateOrEdit === 'create'" class="modal-card-title">
            Добавить единицу измерения
          </p>
          <p v-show="isCreateOrEdit === 'edit'" class="modal-card-title">
            Изменить единицу измерения {{ measureId }}
          </p>

          <button class="delete" aria-label="close" @click="toHide"></button>
        </header>
        <section class="modal-card-body">
          <!-- Create -->
          <div v-if="isCreateOrEdit === 'create'">
            <label class="label">Обозначение</label>
            <input
              id="measure-title"
              ref="title"
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
import { onEscapeKeyPress } from "../../utils/keysevents";

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
    measure: [],
    isCreateOrEdit: String,
  },

  methods: {
    toHide() {
      console.log("watch");
      this.measureData.title = "";
      this.measureData.full_title = "";
      let modalWindow = document.getElementById("create-measure-modal");
      modalWindow.classList.remove("is-active");
    },

    toCreate() {
      this.$emit("emitOnMeasureCreateModal", this.measureData);
      this.toHide();
    },

    focusInput() {
      //this.$refs.title.focus();
      document.getElementById("measure-title").focus();
    },
  },

  watch: {
    inputFocusReset: "focusInput",
  },

  mounted() {
    onEscapeKeyPress();
  },
};
</script>

<style lang="scss" scoped></style>
