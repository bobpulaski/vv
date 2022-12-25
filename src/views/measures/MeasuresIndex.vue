<template>
  <div id="measure-index">
    <div class="columns is-vcentered">
      <div class="column">
        <header-h1>Единицы измерения</header-h1>
      </div>
      <div class="column">
        <kso-button
          id="add-button"
          @click="showMeasureCreateModal"
          class="is-primary is-pulled-right"
          title="Добавить единицу измерения (Insert)"
          >Добавить</kso-button
        >
      </div>
    </div>
    <table class="table is-bordered is-fullwidth">
      <thead>
        <tr>
          <th>#</th>
          <th>id</th>
          <th>title</th>
          <th>full_title</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody v-for="(measure, index) of measures" v-bind:key="measure.id">
        <tr>
          <td>{{ index + 1 }}</td>
          <td>{{ measure.id }}</td>
          <td>{{ measure.title }}</td>
          <td>{{ measure.full_title }}</td>
          <td>
            <div class="columns is-vcentered">
              <div class="column is-1">
                <button title="Просмотреть" class="button is-light is-small">
                  <i class="fa-solid fa-folder"></i>
                </button>
              </div>

              <div class="column is-1">
                <button
                  title="Редактировать"
                  class="button is-light is-small"
                  @click="showMeasureEditModal"
                >
                  <i class="fa-solid fa-ellipsis"></i>
                </button>
              </div>

              <div class="column is-1">
                <button
                  title="Удалить"
                  class="button is-light is-small"
                  @click="
                    showDeleteConfirmModal(
                      measure.id,
                      measure.full_title,
                      measure.title
                    )
                  "
                >
                  <i class="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <MeasureCreateModal
      @emitOnMeasureCreateModal="createMeasure"
    ></MeasureCreateModal>
    
    <DeleteConfirmModal
      title="Удаление единицы измерения"
      :entity-title="`${entityTitle} (${entityFullTitle})`"
      @emitOnDeleteConfirmModal="deleteMeasure"
    ></DeleteConfirmModal>
  </div>
</template>

<script>
import axios from "axios";
import DeleteConfirmModal from "../../components/DeleteConfirmModal.vue";
import MeasureCreateModal from "./MeasureCreateModal.vue";
import MeasureEditModal from "./MeasureEditModal.vue";

import { onInsertPress } from "../../utils/keysevents";

export default {
  components: {
    DeleteConfirmModal,
    MeasureCreateModal,
    MeasureEditModal,
  },

  data() {
    return {
      measures: [],
      measureId: null,
      entityTitle: "",
      entityFullTitle: "",
    };
  },

  methods: {
    async getMeasures() {
      await axios
        .get("http://localhost:5000/api/measures")
        .then((response) => {
          this.measures = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async createMeasure(measureData) {
      await axios.post("http://127.0.0.1:5000/api/measures", measureData);
      this.getMeasures();
    },

    async deleteMeasure() {
      await axios.delete(
        "http://127.0.0.1:5000/api/measures/" + this.measureId
      );
      this.getMeasures();
    },

    showMeasureCreateModal() {
      let modalWindow = document.getElementById("create-modal");
      modalWindow.classList.add("is-active");
      document.getElementById("measure-name").focus();
    },

    showMeasureEditModal() {
      let modalWindow = document.getElementById("edit-modal");
      modalWindow.classList.add("is-active");
      document.getElementById("measure-name").focus();
    },

    showDeleteConfirmModal(id, title, full_title) {
      this.measureId = id;
      this.entityTitle = title;
      this.entityFullTitle = full_title;
      let modalWindow = document.getElementById("delete-confirm-modal");
      modalWindow.classList.add("is-active");
    },
  },

  mounted() {
    this.getMeasures();
    onInsertPress();
  },
};
</script>

<style lang="scss" scoped></style>
