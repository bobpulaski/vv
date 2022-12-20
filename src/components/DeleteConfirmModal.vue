<template>
  <div>
    <div id="delete-confirm-modal" class="modal">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">{{ title }}</p>
          <button class="delete" aria-label="close" @click="onHide"></button>
        </header>
        <section class="modal-card-body">
          <!-- Content ... -->
          <div class="columns">
            <div class="column is-1 p-1 danger-icon">
              <i class="fa-solid fa-triangle-exclamation is-size-2"></i>
            </div>
            <div class="column">
              <p>
                Вы собираетесь удалить
                <span class="has-text-weight-semibold">{{ entityTitle }}.</span>
              </p>
              <p class="has-text-weight-light">
                Это действие невозможно отменить!
              </p>
            </div>
          </div>
        </section>
        <footer class="modal-card-foot is-justify-content-flex-end">
          <button class="button is-danger" @click="onDelete">Удалить</button>
          <button
            id="close-button"
            class="button is-dark"
            @click="onHide"
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
  name: "DeleteConfirmModal",

  data() {
    return {};
  },

  props: {
    title: String,
    entityTitle: String,
  },

  methods: {
    onHide() {
      let modalWindow = document.getElementById("delete-confirm-modal");
      modalWindow.classList.remove("is-active");
    },

    onDelete() {
      this.$emit("emitOnDeleteConfirmModal");
      this.onHide();
    },
  },

  mounted() {
    document.body.addEventListener("keyup", function (e) {
      if (e.key == "Escape") {
        document.getElementById("close-button").click();
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
