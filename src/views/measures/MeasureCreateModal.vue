<template>
  <div>
    <div id="create-edit-modal" class="modal">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Добавить единицу измерения</p>
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
          <button class="button is-primary" @click="actionButtonGoUp">
            Сохранить
          </button>
          <button
            id="closeButton"
            class="button is-dark"
            v-on:click="hideModal"
          >
            Отмена
          </button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateEditModal",

  props: {
    modalType: String,
    modalTitle: String,
  },

  methods: {
    hideModal() {
      let modalWindow = document.getElementById("create-edit-modal");
      modalWindow.classList.remove("is-active");
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

<style lang="scss" scoped></style>
