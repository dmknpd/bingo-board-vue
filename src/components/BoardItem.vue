<template>
  <div
    @click="enableEditMode"
    class="bg-green-500 w-[120px] h-[120px] border-2 p-2 flex items-center justify-center"
    :class="{ completed: isCompleted }"
  >
    <textarea
      v-if="isEditing"
      @blur="onBlur"
      v-model="text"
      ref="inputField"
      class="w-full h-full p-2 bg-green-500 outline-white text-white resize-none"
      type="text"
      maxlength="28"
    ></textarea>
    <p v-else class="text-white text-xl text-center w-full">
      {{ text }}
    </p>
  </div>
</template>

<script setup>
import { ref, computed, defineProps, watch } from "vue";

import { useBoardStore } from "@/stores/boardStore";

const props = defineProps({
  id: String,
});

const store = useBoardStore();

// Find the item with the id and get its text
const item = computed(() =>
  store.boardItems.find((item) => item.id === props.id)
);
const text = ref(item.value.text);

const onBlur = () => {
  store.updateItemText(props.id, text.value);
  disableEditMode();
};

const isEditing = ref(false);
const isCompleted = ref(false);

const inputField = ref(null);

const disableEditMode = () => {
  isEditing.value = false;
};

const enableEditMode = () => {
  if (!store.isPlayMode) {
    isEditing.value = true;
    setTimeout(() => {
      inputField.value.focus();
    }, 0);
  } else {
    isCompleted.value = !isCompleted.value;
  }
};

watch(
  () => store.isPlayMode,
  () => {
    isCompleted.value = false;
  }
);
</script>

<style scoped>
p {
  overflow-wrap: break-word;
  line-height: 1.25;
}

.completed::after {
  content: "X";
  position: absolute;
  font-size: 120px;
  color: rgb(220 38 38);
}
</style>
