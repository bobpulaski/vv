<template>
  <div>
    <div class="columns is-vcentered">
      <div class="column">
        <header-h1>Единицы измерения</header-h1>
      </div>
      <div class="column">
        <router-link :to="{ name: 'measure-create' }" class="is-pulled-right">
          <button class="button is-info is-small" title="Добавить единицу измерения">
            <i class="fa-regular fa-square-plus"></i>
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
