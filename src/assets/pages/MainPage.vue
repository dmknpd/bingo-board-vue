<template>
  <main class="flex flex-row m-auto p-10">
    <Board />
  </main>
</template>

<script setup>
import Board from "@/components/Board.vue";

import { useBoardStore } from "@/stores/boardStore";
import { onMounted } from "vue";

const store = useBoardStore();

onMounted(() => {
  store.disablePlayMode();
});
</script>
