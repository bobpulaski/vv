import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/companies",
      name: "companies",
      component: () => import("../views/CompaniesIndex.vue"),
    },
    {
      path: "/company/create",
      name: "company-create",
      component: () => import("../views/CompanyCreate.vue"),
    },
    {
      path: "/company/:id/edit",
      name: "company-edit",
      component: () => import("../views/CompanyEdit.vue"),
    },
    {
      path: "/invoices",
      name: "invoices",
      component: () => import("../views/InvoicesIndex.vue"),
    },
    {
      path: "/products",
      name: "products",
      component: () => import("../views/ProductsIndex.vue"),
    },
    {
      path: "/product/create",
      name: "product-create",
      component: () => import("../views/ProductCreate.vue"),
    },
    {
      path: "/measures",
      name: "measures",
      component: () => import("../views/MeasuresIndex.vue"),
    },
    {
      path: "/measure/create",
      name: "measure-create",
      component: () => import("../views/MeasureCreate.vue"),
    },
    {
      path: "/my-companies",
      name: "my-companies",
      component: () => import("../views/MyCompaniesIndex.vue"),
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
