import { createStore } from 'vuex';
// import createPersistedState from 'vuex-persistedstate';

import authStore from './auth.store';
import userStore from './user.store';


const store = createStore({
 modules: {
  authStore,
  userStore,
 },
 plugins: [
  // createPersistedState({paths: ['authStore']})
 ],
});

export default store;
