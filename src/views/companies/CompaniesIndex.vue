<template>
  <div>
    <div class="columns is-vcentered">
      <div class="column">
        <header-h1>Контрагенты</header-h1>
        <div v-if="isCompanyCreated">СОЗДАНА ТОЛЬКО ЧТО</div>
      </div>
      <div class="column">
        <kso-button
          @click="$router.push({ name: 'company-create' })"
          class="is-primary is-pulled-right"
          title="Добавить контрагента"
          >Добавить</kso-button
        >
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
                <button title="Просмотреть" class="button is-light is-small">
                  <i class="fa-solid fa-folder"></i>
                </button>
              </div>

              <div class="column is-1">
                <button
                  title="Редактировать"
                  class="button is-light is-small"
                  @click="
                    $router.push({
                      name: 'company-edit',
                      params: { id: company.id },
                    })
                  "
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
    <DeleteConfirmModal
      modalTitle="Удаление контрагента"
      :entityTitle="companyName"
      @actionButtonGoUp="deleteCompanyById(companyId)"
    ></DeleteConfirmModal>
  </div>
</template>

<script>
import axios from "axios";
import DeleteConfirmModal from "../../components/DeleteConfirmModal.vue";

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
      await axios
        .get("http://127.0.0.1:5000/api/companies")
        .then((response) => {
          this.companies = response.data;
        });
    },

    async deleteCompanyById(id) {
      await axios.delete("http://127.0.0.1:5000/api/company/" + id);
      this.getAllComapnies();
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
