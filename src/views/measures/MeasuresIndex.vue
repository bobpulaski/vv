<template>
  <div>
    <div class="columns is-vcentered">
      <div class="column">
        <header-h1>Единицы измерения</header-h1>
      </div>
      <div class="column">
        <kso-button
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
          <th>name</th>
          <th>short_name</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody v-for="(measure, index) of measures" v-bind:key="measure.id">
        <tr>
          <td>{{ index + 1 }}</td>
          <td>{{ measure.id }}</td>
          <td>{{ measure.name }}</td>
          <td>{{ measure.short_name }}</td>
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
                  id="addButton"
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
                  @click="showDeleteConfirmModal(measure.id, measure.name)"
                >
                  <i class="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <h1>{{ typeOfModal }}</h1>

    <MeasureCreateModal
      @actionGoUpOnCreate="getAllMeasures"
    ></MeasureCreateModal>
    <DeleteConfirmModal
      title="Удаление единицы измерения"
      :entity-title="entityTitle"
      @emitOnDeleteConfirmModal="deleteMeasuresById(measureId)"
    ></DeleteConfirmModal>
  </div>
</template>

<script>
import axios from "axios";
import MeasureCreateModal from "./MeasureCreateModal.vue";
import MeasureEditModal from "./MeasureEditModal.vue";
import DeleteConfirmModal from "../../components/DeleteConfirmModal.vue";

export default {
  components: {
    MeasureCreateModal,
    MeasureEditModal,
    DeleteConfirmModal,
  },

  data() {
    return {
      measures: [],
      typeOfModal: "",
      entityTitle: "",
      measureId: null,
    };
  },

  methods: {
    async getAllMeasures() {
      await axios
        .get("http://localhost:5000/api/measures")
        .then((response) => {
          this.measures = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
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

    showDeleteConfirmModal(id, name) {
      this.measureId = id;
      this.entityTitle = name;
      let modalWindow = document.getElementById("delete-confirm-modal");
      modalWindow.classList.add("is-active");
    },

    async deleteMeasuresById(id) {
      await axios.delete("http://127.0.0.1:5000/api/measures/" + id);
      this.getAllMeasures();
    },
  },

  mounted() {
    this.getAllMeasures();
    document.body.addEventListener("keyup", function (e) {
      if (e.key == "Insert") {
        document.getElementById("addButton").click();
      }
    });
  },
};
</script>

<style lang="scss" scoped></style>
