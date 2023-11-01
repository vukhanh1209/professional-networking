import axiosClient from "../axiosClient";
import {
  PREFIX, AUTH_SERVICE, REGISTER, SIGN_IN, REFRESH_TOKEN, VERIFY_ACCOUNT, REGENERATE_OTP
} from "@/const/endpoint";


export const authService = {
  // getSignMessage: () => {
  //   return axiosClient.get(`${AUTH_GET_SIGN_MESSAGE_ENDPOINT}`);
  // },
  register: (params:any) => {
    return axiosClient.post(`${PREFIX}${AUTH_SERVICE}${REGISTER}`, params);
  },
  signIn: (params:any) => {
    return axiosClient.post(`${PREFIX}${AUTH_SERVICE}${SIGN_IN}`, params);
  },
  refreshToken: (params:any) => {
    return axiosClient.post(`${PREFIX}${AUTH_SERVICE}${REFRESH_TOKEN}`, params);
  },
  verifyAccount: (params:any) => {
    return axiosClient.put(`${PREFIX}${AUTH_SERVICE}${VERIFY_ACCOUNT}?email=${params.email}&otp=${params.otp}`);
  },
  regenerateOTP: (params:any) => {
    return axiosClient.put(`${PREFIX}${AUTH_SERVICE}${REGENERATE_OTP}?email=${params}`);
  },
  // loginGoogle: (params:any) => {
  //   return axiosClient.post(`${AUTH_SIGN_IN_GOOGLE_ENDPOINT}`, params);
  // },
};