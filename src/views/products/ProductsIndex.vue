<template>
  <div>
    <div class="columns is-vcentered">
      <div class="column">
        <header-h1>Товары и услуги</header-h1>
      </div>
      <div class="column">
        <kso-button
          @click="$router.push({ name: 'product-create' })"
          class="is-primary is-pulled-right"
          title="Добавить товар или услугу"
          >Добавить</kso-button
        >
      </div>
    </div>
    <table class="table is-fullwidth is-bordered">
      <thead>
        <tr>
          <th>#</th>
          <th>Id</th>
          <th>Title</th>
          <th>Measure</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody v-for="(product, index) of products" v-bind:key="product.id">
        <tr>
          <td>{{ index + 1 }}</td>
          <td>{{ product.id }}</td>
          <td>{{ product.title }}</td>
          <td>{{ product.measure }}</td>
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
                      params: { id: product.id },
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
                  @click="showDeleteConfirmModal(product.id, product.name)"
                >
                  <i class="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
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
      products: [],
      productId: null,
      entityTitle: "",
    };
  },

  methods: {
    async getAllProducts() {
      await axios("http://127.0.0.1:5000/api/products")
        .then((response) => {
          this.products = response.data;
        })
        .catch((error) => {
          console(error);
        });
    },

    showDeleteConfirmModal(id, name) {
      this.productId = id;
      this.entityTitle = name;
      let modalWindow = document.getElementById("delete-confirm-modal");
      modalWindow.classList.add("is-active");
    },
  },

  mounted() {
    this.getAllProducts();
  },
};
</script>

<style lang="scss" scoped></style>
