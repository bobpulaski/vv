<template>
  <div>
    <nav
      class="navbar has-shadow is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link :to="{ name: 'companies' }" class="navbar-item"
            >Контрагенты</router-link
          >
          <router-link to="/invoices" class="navbar-item">Счета</router-link>
          <router-link to="/products" class="navbar-item"
            >Товары и услуги</router-link
          >
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">Настройки</a>

            <div class="navbar-dropdown">
              <router-link to="/my-companies" class="navbar-item"
                >Мои компании</router-link
              >
              <router-link to="/measures" class="navbar-item"
                >Единицы измерения</router-link
              >
              <hr class="navbar-divider" />
              <a class="navbar-item">Справка</a>
              <router-link to="/about" class="navbar-item"
                >О программе</router-link
              >
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

<style>
  .modal-background {
    opacity: 75%;
  }
</style>
