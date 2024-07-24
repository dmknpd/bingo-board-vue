<template>
  <div class="flex flex-row items-center relative">
    <div class="grid" :style="store.gridStyle">
      <BoardItem
        v-for="item in store.gridItemAmount"
        :key="item.id"
        :id="item.id"
      />
    </div>

    <!-- buttons -->
    <button
      @click="gridDecrease"
      v-show="showGridDecrease"
      class="text-white text-5xl border-2 w-[50px] h-[50px] absolute left-[-100px]"
    >
      -
    </button>
    <button
      @click="gridIncrease"
      v-show="showGridIncrease"
      class="text-white text-5xl border-2 w-[50px] h-[50px] absolute right-[-100px]"
    >
      +
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

import { useBoardStore } from "@/stores/boardStore";
import BoardItem from "./BoardItem.vue";

const store = useBoardStore();

const gridIncrease = () => {
  if (store.gridSize < 6) {
    store.gridSize++;
  }
};

const gridDecrease = () => {
  if (store.gridSize > 3) {
    store.gridSize--;
  }
};

const showGridIncrease = computed(() => {
  return store.gridSize < 6 ? true : false;
});

const showGridDecrease = computed(() => {
  return store.gridSize > 3 ? true : false;
});
</script>
