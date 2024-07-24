<template>
  <div
    @click="enableEditMode"
    class="bg-green-500 w-[120px] h-[120px] border-2 p-2 flex items-center justify-center"
  >
    <input
      v-if="isEditing"
      @blur="disableEditMode"
      v-model="textContent"
      ref="inputField"
      class="w-full h-full p-2"
      type="text"
    />
    <p v-else class="text-white text-xl text-center w-full">
      {{ textContent }}
    </p>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";

const props = defineProps({
  id: String,
});

const textContent = ref("");

const isEditing = ref(false);
const inputField = ref(null);

const disableEditMode = () => {
  isEditing.value = false;
};

const enableEditMode = () => {
  isEditing.value = true;
  setTimeout(() => {
    inputField.value.focus();
  }, 0);
};
</script>

<style scoped>
p {
  overflow-wrap: break-word;
}
</style>
