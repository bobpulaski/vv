<template>
  <div>
    <div id="confirm-modal" class="modal">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Удалить?</p>
          <button
            class="delete"
            aria-label="close"
            v-on:click="hideModal"
          ></button>
        </header>
        <section class="modal-card-body">
          <!-- Content ... -->
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
