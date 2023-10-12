import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
    state: () => ({
    access_token: 'asdsadasd' as string | null,
    refresh_token: null as string | null,
    expires_in: Infinity,
    }),
    getters: {
        getAccessToken: (state) => state.access_token,
    },
    persist: true,
});

// import { defineStore } from 'pinia';

// export const useAuthStore = defineStore({
//   id: 'auth', // Store identifier
//   state: () => ({
//     access_token: null as string | null,
//     refresh_token: null as string | null,
//     expires_in: Infinity,
//   }),
//   getters: {
//     getAccessToken: (state) => state.access_token,
//   },
//   actions: {
//     setAccessToken(access_token: string) {
//       this.access_token = access_token;
//     },
//     setRefreshToken(refresh_token: string) {
//       this.refresh_token = refresh_token;
//     },
//     setExpireIn(expires_in: number) {
//       this.expires_in = expires_in;
//     },
//   },
// });