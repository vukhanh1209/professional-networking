import axiosClient from "../axiosClient";
import {
  DELETE_JOB,
  GET_ALL_APPLICATION,
  GET_APPLICATION,
  GET_JOB_BY_ID,
  LIST_ALL_JOB,
  LOG_IN, POST_JOB, REGISTER_RECRUITER, UPDATE_APPLICATION, UPDATE_JOB, 
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
  },
  postJob: (params : any) => {
    return axiosClient.post(POST_JOB, params)
  },
  deleteJob: (jobId : string) => {
    return axiosClient.delete(`${DELETE_JOB}?id=${jobId}`)
  },
  getAllApplication: (params : any) => {
    return axiosClient.get(`${GET_ALL_APPLICATION}?page=${params?.page}&size=${params?.size}&type=${params?.type}`)
  },
  getApplicationById: (applicationId: string) => {
    return axiosClient.get(`${GET_APPLICATION}/${applicationId}`)
  },
  updateApplication: (request: any) => {
    return axiosClient.post(`${UPDATE_APPLICATION}/${request.applicationId}`, request.requestBody)
  }

};

