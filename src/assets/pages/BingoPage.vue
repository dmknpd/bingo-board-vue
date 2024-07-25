<template>
  <main class="flex flex-row m-auto p-10">
    <div v-if="store.boardItemsForGame" class="grid" :style="store.gridStyle">
      <BoardItem
        v-for="item in store.boardItemsForGame"
        :key="item.id"
        :id="item.id"
      />
    </div>
    <div v-else>
      <h1 class="text-white text-5xl">First you need to create board</h1>
    </div>
  </main>
</template>

<script setup>
import { useBoardStore } from "@/stores/boardStore";
import BoardItem from "@/components/BoardItem.vue";
import { onMounted } from "vue";

const store = useBoardStore();

onMounted(() => {
  store.enablePlayMode();
});
</script>
