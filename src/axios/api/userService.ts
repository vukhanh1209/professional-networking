import axiosClient from "../axiosClient";
import {
  PREFIX, USERS_SERVICE, FORGOT_PASSWORD, CHANGE_PASSWORD, RESET_PASSWORD, SAVE_JOB, APPLIED_JOBS, APPLY_JOB, SAVED_JOBS, SAVE_JOBS
} from "@/const/endpoint";


export const userService = {
  forgotPassword: (params:any) => {
    return axiosClient.post(`${PREFIX}${USERS_SERVICE}${FORGOT_PASSWORD}`, params);
  },
  resetPassword: (params:any) => {
    const requestBody = params?.requestBody;
    const email = params?.email;
    return axiosClient.post(`${PREFIX}${USERS_SERVICE}${RESET_PASSWORD}/${email}`, requestBody);
  },
  saveJob: (params : any) => {
    return axiosClient.post(`${PREFIX}${USERS_SERVICE}${SAVE_JOB}/${params}`)
  },
  getSavedJobs: (params : any) => {
    return axiosClient.get(`${PREFIX}${USERS_SERVICE}${SAVED_JOBS}`, {params})
  },
  deleteSavedJob: (params : any) => {
    return axiosClient.delete(`${PREFIX}${USERS_SERVICE}${SAVE_JOBS}/${params}`)
  },
  applyJob: (params : any) => {
    return axiosClient.post(`${PREFIX}${USERS_SERVICE}${APPLY_JOB}`);
  },
  getAppliedJobs: (params : any) => {
    return axiosClient.get(`${PREFIX}${USERS_SERVICE}${APPLIED_JOBS}`, {params});
  },
};