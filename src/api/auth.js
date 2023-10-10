import axios from 'axios';

export const authsApi = () => {

  // const baseURL = 'https://api.service-kp.com/';
  // const baseURL = 'http://localhost:3002/';
  const baseURL = 'http://proxy.kpstv.net/';

  async function fetchAuthCode() {
    const { data } = await axios.post(
      `${baseURL}oauth2/device`,
      null,
      {
        params: {
          grant_type: 'device_code',
          client_id: 'xbmc',
          client_secret: 'cgg3gtifu46urtfp2zp1nqtba0k2ezxh',
        },
      },
    );
    return data;
  }

  async function checkAuthState(code) {
    const { data } = await axios.post(`${baseURL}oauth2/device`, null,
      {
        params: {
          grant_type: 'device_token',
          client_id: 'xbmc',
          client_secret: 'cgg3gtifu46urtfp2zp1nqtba0k2ezxh',
          code: code,
        },
      },
    );
    return data;
  }

  return {
    fetchAuthCode,
    checkAuthState,
  };

}