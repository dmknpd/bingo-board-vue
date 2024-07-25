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
    boardItemsAll.value = [];
    for (let i = 1; i <= 36; i++) {
      boardItemsAll.value.push({ id: uuidv4(), text: "" });
    }
  };

  initializeBoardItems();

  //items for edit

  const boardItems = computed(() => {
    return boardItemsAll.value.slice(0, totalSize.value);
  });

  const updateItemText = (id, newText) => {
    const item = boardItemsAll.value.find((item) => item.id === id);
    if (item) {
      item.text = newText;
    }
  };

  // const clearBoardItems = () => {
  //   boardItemsAll.value = boardItemsAll.value.map((item) => {
  //     return { ...item, text: "" };
  //   });
  // };

  //shuffle
  const needShuffle = ref(false);

  const shuffleItems = (array) => {
    let arrayCopy = array.slice();

    for (let i = arrayCopy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
    }

    return arrayCopy;
  };

  //items for game

  const boardItemsForGame = ref([]);

  const startGame = () => {
    return needShuffle.value
      ? (boardItemsForGame.value = shuffleItems(boardItems.value))
      : (boardItemsForGame.value = [...boardItems.value]);
  };

  //Play mode

  const isPlayMode = ref(false);

  const enablePlayMode = () => {
    isPlayMode.value = true;
  };

  const disablePlayMode = () => {
    isPlayMode.value = false;
  };

  return {
    gridSize,
    gridStyle,
    boardItems,
    updateItemText,
    boardItemsAll,
    initializeBoardItems,
    needShuffle,
    boardItemsForGame,
    startGame,
    isPlayMode,
    enablePlayMode,
    disablePlayMode,
  };
});
