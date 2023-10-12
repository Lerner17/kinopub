export interface DeviceCodeResponse {
  code: string;
  user_code: string;
  verification_uri: string;
  expires_in: number;
  interval: number;
}

export enum CheckCodeStateStatus {
  BadVerificationCode = 'bad_verification_code',
  AuthorizationPending = 'authorization_pending',
}

export interface CheckCodeStateError {
  status: number,
  error: CheckCodeStateStatus
}
export interface CheckCodeStateResponse {
  access_token: string;
  refresh_token: string;
  expires_in: number;
}
