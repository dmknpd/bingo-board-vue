import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { v4 as uuidv4 } from "uuid";

export const useBoardStore = defineStore("boardStore", () => {
  const gridSize = ref(4);

  const gridStyle = computed(() => {
    return `grid-template-columns: repeat(${gridSize.value}, minmax(0, 1fr));`;
  });

  const gridItemAmount = computed(() => {
    return Array.from({ length: gridSize.value ** 2 }, (_, i) => ({
      id: uuidv4(),
    }));
  });

  return { gridSize, gridStyle, gridItemAmount };

  //   const boardItems = ref([]);
  //   const setBoardItems = (items) => {
  //     boardItems.value = items;
  //   };
  //   const updateBoardItem = (id, text) => {
  //     const item = boardItems.value.find((item) => item.id === id);
  //     if (item) {
  //       item.text = text;
  //     }
  //   };
});
