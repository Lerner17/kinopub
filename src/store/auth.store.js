export default {
  state: {
    access_token: null,
    refresh_token: null,
    expires_in: Infinity,
  },
  mutations: {
    setAccessToken (state, access_token) {
      state.access_token = access_token;
    },

    setRefreshToken (state, refresh_token) {
      state.refresh_token = refresh_token;
    },

    setExpireIn (state, expires_in) {
      state.expires_in = expires_in;
    },
  },
  actions: {
    // Functions to perform asynchronous operations and then commit mutations
  },
  getters: {
    getAccessToken: (state) => state.access_token,
  },
};
