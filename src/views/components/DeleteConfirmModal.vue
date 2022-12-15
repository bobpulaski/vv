<template>
  <div>
    <div id="confirm-modal" class="modal">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Удаление контрагента</p>
          <button
            class="delete"
            aria-label="close"
            v-on:click="hideModal"
          ></button>
        </header>
        <section class="modal-card-body">
          <!-- Content ... -->
          <div class="columns">
            <div class="column is-1 p-1 danger-icon">
              <i class="fa-solid fa-triangle-exclamation is-size-2"></i>
            </div>
            <div class="column">
              <p>
                Вы собираетесь удалить контрагента
                <span class="has-text-weight-semibold">{{ companyName }}.</span>
              </p>
              <p class="has-text-weight-light">
                Это действие невозможно отменить.
              </p>
            </div>
          </div>
        </section>
        <footer class="modal-card-foot is-justify-content-flex-end">
          <button
            class="button is-danger"
            @click="deleteCompanyById(companyId)"
          >
            Удалить
          </button>
          <button id="closeButton" class="button" v-on:click="hideModal">
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
  name: "DeleteConfirmModal",

  data() {
    return {};
  },

  props: {
    companyId: Number,
    companyName: String,
  },

  methods: {
    hideModal() {
      let modalWindow = document.getElementById("confirm-modal");
      modalWindow.classList.remove("is-active");
    },

    async deleteCompanyById(id) {
      await axios.delete("http://127.0.0.1:5000/api/company/" + id);
      this.hideModal();
      this.$emit("companyHasBeenDeleted");
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

<style>
.danger-icon {
  margin-top: 10px;
  margin-left: 10px;
  color: hsl(348, 100%, 61%);
}
</style>
