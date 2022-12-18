<template>
  <div>
    <div class="columns is-vcentered">
      <div class="column">
        <header-h1>Единицы измерения</header-h1>
      </div>
      <div class="column">
        <kso-button
          @click="showModal"
          class="is-primary is-pulled-right"
          title="Добавить единицу измерения"
          >Добавить</kso-button
        >
      </div>
    </div>
    <table class="table is-bordered is-fullwidth">
      <thead>
        <tr>
          <th>#</th>
          <th>Id</th>
          <th>Title</th>
          <th>FullTitle</th>
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
                  @click="showModal"
                >
                  <i class="fa-solid fa-ellipsis"></i>
                </button>
              </div>

              <div class="column is-1">
                <button
                  title="Удалить"
                  class="button is-light is-small"
                  v-on:click="showModal(company.id, company.name)"
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

    <MeasureCreateModal></MeasureCreateModal>
  </div>
</template>

<script>
import axios from "axios";
import MeasureCreateModal from "./MeasureCreateModal.vue";

export default {
  components: {
    MeasureCreateModal,
  },

  data() {
    return {
      measures: [],
      typeOfModal: "",
      modalTitle: "",
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

    showModal() {
      let modalWindow = document.getElementById("create-edit-modal");
      modalWindow.classList.add("is-active");
    },
  },

  mounted() {
    this.getAllMeasures();
  },
};
</script>

<style lang="scss" scoped></style>
