<template>
  <div>
    <div id="edit-measure-modal" class="modal">
      <div class="modal-background"></div>
      <div class="modal-card column is-3">
        <header class="modal-card-head">
          <p class="modal-card-title">Изменить единицу измерения</p>
          <button
            class="delete"
            aria-label="close"
            v-on:click="hideEditModal"
          ></button>
        </header>
        <section class="modal-card-body">
          <!-- Content ... -->
          <label class="label">Наименование</label>
          <input
            id="measure-name"
            class="input column"
            type="text"
            name="name"
            v-model="measureData.title"
          />
          <label class="label mt-4">Обозначение</label>
          <input
            id="measure-short-name"
            class="input column is-4"
            type="text"
            name="name"
            v-model="measureData.short_name"
          />
        </section>
        <footer class="modal-card-foot is-justify-content-flex-end">
          <button class="button is-primary" @click="UpdateMeasure">
            Сохранить
          </button>
          <button
            id="closeButton"
            class="button is-dark"
            @click="hideEditModal"
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
  name: "MeasureEditModal",
};
</script>
