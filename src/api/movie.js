
import axios from 'axios';

import { useStore } from 'vuex';

export const movieApi = () => {

  const store = useStore();  

  // const baseURL = 'https://api.service-kp.com/';
  // const baseURL = 'http://localhost:3002/';
  const baseURL = 'http://proxy.kpstv.net/';

  async function getMovies() {
    const { data } = await axios.get(`${baseURL}v1/items`, {
      headers: { Authorization: 'Bearer ' + store.state.authStore.access_token},
    });
    return data;
  }

  async function getMoviesByID(id) {
    const { data } = await axios.get(`${baseURL}v1/items/${id}`, {
      headers: { Authorization: 'Bearer ' + store.state.authStore.access_token},
    });
    return data;
  }


  return {
    getMovies,
    getMoviesByID,
  };
};
