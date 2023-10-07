import axios from 'axios';

export const authsApi = () => {

  const baseURL = 'https://api.service-kp.com/';

  async function fetchAuthCode() {
    const { data }= await axios.post(`${baseURL}oauth2/device?grant_type=device_code&client_id=xbmc&client_secret=cgg3gtifu46urtfp2zp1nqtba0k2ezxh`);
    return data;
  }

  return { fetchAuthCode };

}