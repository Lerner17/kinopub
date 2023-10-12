import axios from 'axios'
import type { DeviceCodeResponse, CheckCodeStateError, CheckCodeStateResponse } from "@/types/auth";


export const useAuthApi = () => {
  const baseURL = 'https://api.service-kp.com/';
  // const baseURL = 'http://proxy.kpstv.net/';

  async function checkAuthState(code: string | undefined): Promise<CheckCodeStateResponse> {
    if (code === undefined) {
      throw new Error('code undefined');
    }
    const { data }: { data: CheckCodeStateResponse } = await axios.post(`${baseURL}oauth2/device`, null,
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

  async function fetchAuthCode(): Promise<DeviceCodeResponse> {
    const { data }: { data: DeviceCodeResponse } = await axios.post(
      `${baseURL}oauth2/device`,
      null,
      {
        headers: {
          "User-Agent": 'Mozilla/5.0 (SMART-TV; LINUX; Tizen 7.0) AppleWebKit/537.36 (KHTML, like Gecko) 94.0.4606.31/7.0 TV Safari/537.36',
        },
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
    checkAuthState,
  }
};
