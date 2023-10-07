import { defineStore } from 'pinia';

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        access_token: null,
        refresh_token: null,
        expires_in: Infinity
    }),
    getters: {},
    actions: {},
});
