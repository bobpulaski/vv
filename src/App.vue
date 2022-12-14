<template>
  <div>
    <nav
      class="navbar has-background-white has-shadow has-background-white"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          />
        </a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link :to="{ name: 'companies' }" class="navbar-item"
            >Контрагенты</router-link
          >
          <router-link to="/invoices" class="navbar-item">Счета</router-link>
          <router-link to="/goods" class="navbar-item"
            >Товары и услуги</router-link
          >
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">Настройки</a>

            <div class="navbar-dropdown">
              <a class="navbar-item">Моя компания</a>
              <a class="navbar-item">Единицы измерения</a>
              <hr class="navbar-divider" />
              <a class="navbar-item">Справка</a>
              <router-link to="/about" class="navbar-item">О программе</router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <section class="p-4">
      <router-view></router-view>
    </section>
  </div>
</template>

<script setup></script>

<style></style>
