import axiosClient from "../axiosClient";
import {
  GET_JOB_BY_ID,
  LIST_ALL_JOB,
  LOG_IN, REGISTER_RECRUITER, UPDATE_JOB, 
} from "@/const/endpoint";


export const recruiterService = {
  logIn : (params : any) => {
    return axiosClient.post(LOG_IN, params)
  },
  register : (params : any) => {
    return axiosClient.post(REGISTER_RECRUITER, params)
  },
  getPostedJobs: () => {
    return axiosClient.get(LIST_ALL_JOB)
  },
  getPostedJobById: (jobId : string) => {
    return axiosClient.get(`${GET_JOB_BY_ID}/${jobId}`)
  },
  updateJob: (params : any) => {
    const id = params?.id;
    const body =  params?.body
    return axiosClient.post(`${UPDATE_JOB}?id=${id}`, body)
  }

};

