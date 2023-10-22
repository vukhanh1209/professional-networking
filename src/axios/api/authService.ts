import axiosClient from "../axiosClient";
import {
  AUTH_GET_SIGN_MESSAGE_ENDPOINT, AUTH_SIGN_IN_ENDPOINT, AUTH_SIGN_IN_GOOGLE_ENDPOINT,
} from "../../const/endpoint";


export const authService = {
  getSignMessage: () => {
    return axiosClient.get(`${AUTH_GET_SIGN_MESSAGE_ENDPOINT}`);
  },
  signIn: (params:any) => {
    return axiosClient.post(`${AUTH_SIGN_IN_ENDPOINT}`, params);
  },
  loginGoogle: (params:any) => {
    return axiosClient.post(`${AUTH_SIGN_IN_GOOGLE_ENDPOINT}`, params);
  },
};