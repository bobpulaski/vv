<template>
  <div>
    <div class="columns is-vcentered">
      <div class="column">
        <h1 class="is-size-3">Контрагенты</h1>
        <div v-if="isCompanyCreated">СОЗДАНА ТОЛЬКО ЧТО</div>
      </div>
      <div class="column">
        <router-link :to="{ name: 'companies-create' }" class="is-pulled-right">
          <button class="button is-info is-small" title="Создать контрагента">
            <i class="fa-regular fa-square-plus"></i>
          </button>
        </router-link>
      </div>
    </div>
    <table class="table is-fullwidth is-bordered">
      <thead>
        <tr>
          <th>#</th>
          <th>Id</th>
          <th>Name</th>
          <th>Inn</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody v-for="(company, index) of companies" v-bind:key="company.id">
        <tr>
          <td>{{ index + 1 }}</td>
          <td>{{ company.id }}</td>
          <td>{{ company.name }}</td>
          <td>{{ company.inn }}</td>
          <td>
            <div class="columns is-vcentered">
              <div class="column is-1">
                <button
                  title="Просмотреть"
                  class="button is-info is-light is-small"
                >
                  <i class="fa-solid fa-folder"></i>
                </button>
              </div>
              <div class="column is-1">
                <button
                  title="Редактировать"
                  class="button is-success is-light is-small"
                >
                  <i class="fa-solid fa-ellipsis"></i>
                </button>
              </div>
              <div class="column is-1">
                <button
                  title="Удалить"
                  class="button is-danger is-light is-small"
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
    <DeleteConfirmModal
      :companyId="companyId"
      :companyName="companyName"
      @companyHasBeenDeleted="getAllComapnies"
    ></DeleteConfirmModal>
  </div>
</template>

<script>
import axios from "axios";
import DeleteConfirmModal from "./components/DeleteConfirmModal.vue";

export default {
  components: {
    DeleteConfirmModal,
  },

  data() {
    return {
      companies: [],
      companyId: null,
      companyName: "",
      isCompanyCreated: "",
    };
  },

  methods: {
    async getAllComapnies() {
      await axios.get("http://127.0.0.1:5000/api/company").then((response) => {
        this.companies = response.data;
        console.log(this.companies);
      });
    },

    showModal(id, name) {
      this.companyId = id;
      this.companyName = name;

      let modalWindow = document.getElementById("confirm-modal");
      modalWindow.classList.add("is-active");
    },

    getSessionKey() {
      this.isCompanyCreated = localStorage.getItem("isCompanyCreated");
      delete localStorage.isCompanyCreated;
    },
  },

  mounted() {
    this.getAllComapnies();
    this.getSessionKey();
  },

  unmounted() {
    this.isCompanyCreated = "";
  },
};
</script>
