<template>
  <div class="flex flex-col items-center gap-10">
    <div class="flex flex-row items-center gap-20">
      <button
        @click="gridDecrease"
        :class="{ 'opacity-0': !showGridDecrease }"
        class="text-white text-5xl border-2 w-[50px] h-[50px] hover:text-green-500 hover:border-green-500"
      >
        -
      </button>

      <!-- board -->
      <div class="grid" :style="store.gridStyle">
        <BoardItem
          v-for="item in store.boardItems"
          :key="item.id"
          :id="item.id"
        />
      </div>

      <button
        @click="gridIncrease"
        :class="{ 'opacity-0': !showGridIncrease }"
        class="text-white text-5xl border-2 w-[50px] h-[50px] hover:text-green-500 hover:border-green-500"
      >
        +
      </button>
    </div>

    <div class="flex gap-5 items-center">
      <button
        @click="store.initializeBoardItems"
        class="text-white text-2xl py-1 px-2 border-2 hover:text-green-500 hover:border-green-500"
      >
        ⟳
      </button>
      <div class="flex items-center gap-2">
        <label for="random" class="text-white text-xl">Shuffle?</label>
        <input
          type="checkbox"
          name="random"
          id="random"
          class="h-5 w-5 accent-white"
          v-model="store.needShuffle"
        />
      </div>
      <button
        @click="startGame"
        class="text-white text-2xl py-1 px-2 border-2 hover:text-green-500 hover:border-green-500"
      >
        Create
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";

import { useBoardStore } from "@/stores/boardStore";
import BoardItem from "./BoardItem.vue";

const store = useBoardStore();
const router = useRouter();

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
  return store.gridSize < 6 && !store.isPlayMode ? true : false;
});

const showGridDecrease = computed(() => {
  return store.gridSize > 3 && !store.isPlayMode ? true : false;
});

const startGame = () => {
  store.startGame();
  router.push({ name: "bingo" });
};
</script>
