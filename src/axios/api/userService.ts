import axiosClient from "../axiosClient";
import {
  PREFIX, USERS_SERVICE, FORGOT_PASSWORD, CHANGE_PASSWORD, RESET_PASSWORD, SAVE_JOB, APPLIED_JOBS, APPLY_JOB, SAVED_JOBS, SAVE_JOBS, WRITE_COVERLETTER, UPLOAD_CV, GET_CV
} from "@/const/endpoint";

const defaultHeader = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  'Accept': 'application/json',

}

export const userService = {
  forgotPassword: (params:any) => {
    return axiosClient.post(`${FORGOT_PASSWORD}`, params);
  },
  resetPassword: (params:any) => {
    const requestBody = params?.requestBody;
    const email = params?.email;
    return axiosClient.post(`${RESET_PASSWORD}/${email}`, requestBody);
  },
  saveJob: (params : any) => {
    return axiosClient.post(`${SAVE_JOB}/${params}`)
  },
  getSavedJobs: (params : any) => {
    return axiosClient.get(SAVED_JOBS, {params})
  },
  deleteSavedJob: (id : string) => {
    return axiosClient.delete(`${SAVE_JOBS}/${id}`)
  },
  applyJob: (params : any) => {
    return axiosClient.post(`${PREFIX}${USERS_SERVICE}/${params.jobId}${APPLY_JOB}`, params.reqBody, {headers: defaultHeader});
  },
  getAppliedJobs: (params : any) => {
    return axiosClient.get(APPLIED_JOBS, {params});
  },
  writeCoverLetter: (params : any) => {
    return axiosClient.post(WRITE_COVERLETTER, params)
  },
  uploadDefaultCV: (params : any) => {
    return axiosClient.post(UPLOAD_CV, params)
  },
  getCandidateCV: () => {
    return axiosClient.get(GET_CV)
  }
};


