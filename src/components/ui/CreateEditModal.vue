<template>
  <div>
    <div id="confirm-modal" class="modal">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">{{ modalTitle }}</p>
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
          <button class="button is-danger" @click="actionButtonGoUp">
            Удалить
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
export default {};
</script>

<style lang="scss" scoped></style>
