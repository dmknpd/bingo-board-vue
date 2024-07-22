import { defineStore } from "pinia";

export const useMainStore = defineStore("mainStore", {
  state: () => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count++;
    },
  },
});
