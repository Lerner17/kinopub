import axios from 'axios'
import { DeviceCodeResponse } from "@/types/auth";

export const useAuthApi = () => {
  const baseURL = 'https://api.service-kp.com/';
  // const baseURL = 'http://proxy.kpstv.net/';

  async function fetchAuthCode(): Promise<DeviceCodeResponse> {
    const { data }: { data: DeviceCodeResponse } = await axios.post(
      `${baseURL}oauth2/device`,
      null,
      {
        params: {
          grant_type: 'device_code',
          client_id: 'xbmc', // TODO: get this from config
          client_secret: 'cgg3gtifu46urtfp2zp1nqtba0k2ezxh', // TODO: get this from config
        },
      }
    );
    return data;
  }

  return {
    fetchAuthCode,
  }
};
