<template>
  <div class="flex flex-row items-center relative">
    <div class="grid" :style="gridStyle">
      <BoardItem v-for="item in gridItemAmount" :key="item" />
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

import BoardItem from "./BoardItem.vue";

const gridSize = ref(4);

const gridStyle = computed(() => {
  return `grid-template-columns: repeat(${gridSize.value}, minmax(0, 1fr));`;
});

const gridItemAmount = computed(() => {
  return gridSize.value ** 2;
});

const gridIncrease = () => {
  if (gridSize.value < 6) {
    gridSize.value++;
  }
};

const gridDecrease = () => {
  if (gridSize.value > 3) {
    gridSize.value--;
  }
};

const showGridIncrease = computed(() => {
  return gridSize.value < 6 ? true : false;
});

const showGridDecrease = computed(() => {
  return gridSize.value > 3 ? true : false;
});
</script>
