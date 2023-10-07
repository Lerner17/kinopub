import axios from 'axios';

import { useStore } from 'vuex';

export const userApi = () => {

  const store = useStore();  

  const baseURL = 'https://api.service-kp.com/';
  // const baseURL = 'http://localhost:3002/';
  // const baseURL = 'http://proxy.kpstv.net/';

  async function fetchCurrentUser() {
    const { data } = await axios.get(`${baseURL}v1/user`, {
      headers: { Authorization: 'Bearer ' + store.state.authStore.access_token},
    });
    return data;
  }


  return {
    fetchCurrentUser,
  };
};
