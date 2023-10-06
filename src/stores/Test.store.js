import { defineStore } from 'pinia';

export const useTestStore = defineStore('testStore', {
    state: () => ({
        test: 'Hello world'
    }),
    getters: {},
    actions: {},
});
