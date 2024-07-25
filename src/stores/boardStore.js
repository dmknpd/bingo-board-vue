import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";
import { v4 as uuidv4 } from "uuid";

export const useBoardStore = defineStore("boardStore", () => {
  // Size
  const gridSize = ref(4);

  const totalSize = computed(() => gridSize.value ** 2);

  const gridStyle = computed(() => {
    return `grid-template-columns: repeat(${gridSize.value}, minmax(0, 1fr));`;
  });

  //items

  const boardItemsAll = ref([]);

  const initializeBoardItems = () => {
    for (let i = 1; i <= 36; i++) {
      boardItemsAll.value.push({ id: uuidv4(), text: i });
    }
  };

  initializeBoardItems();

  //displayed items

  const boardItems = computed(() => {
    return boardItemsAll.value.slice(0, totalSize.value);
  });

  const updateItemText = (id, newText) => {
    const item = boardItemsAll.value.find((item) => item.id === id);
    if (item) {
      item.text = newText;
    }
  };

  const clearBoardItems = () => {
    boardItemsAll.value = boardItemsAll.value.map((i) => (i.text = ""));
  };

  return {
    gridSize,
    gridStyle,
    boardItems,
    updateItemText,
    boardItemsAll,
    clearBoardItems,
  };
});
