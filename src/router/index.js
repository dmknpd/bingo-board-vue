import { createRouter, createWebHistory } from "vue-router";

import MainPage from "@/assets/pages/MainPage.vue";
import BingoPage from "@/assets/pages/BingoPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: MainPage,
    },
    {
      path: "/bingo",
      name: "bingo",
      component: BingoPage,
    },
  ],
});

export default router;
