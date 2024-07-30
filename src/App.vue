<template>
  <div class="flex flex-col min-h-screen font-Poppins bg-emerald-700">
    <Navbar />

    <RouterView v-slot="{ Component }"
      ><Transition name="page" mode="out-in">
        <component :is="Component" /> </Transition
    ></RouterView>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";

import Navbar from "./components/Navbar.vue";
</script>

<style>
.page-enter-active {
  transition: 500ms ease-in;
}

.page-enter-from {
  opacity: 0;
}
</style>
