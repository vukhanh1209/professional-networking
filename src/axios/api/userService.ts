import axiosClient from "../axiosClient";
import {
  PREFIX, USERS_SERVICE, FORGOT_PASSWORD, CHANGE_PASSWORD, RESET_PASSWORD
} from "@/const/endpoint";


export const userService = {
  forgotPassword: (params:any) => {
    return axiosClient.post(`${PREFIX}${USERS_SERVICE}${FORGOT_PASSWORD}`, params);
  },
  resetPassword: (params:any) => {
    const requestBody = params?.requestBody;
    const email = params?.email;
    return axiosClient.post(`${PREFIX}${USERS_SERVICE}${RESET_PASSWORD}/${email}`, requestBody);
  }
};