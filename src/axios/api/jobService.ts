import axiosClient from "../axiosClient";
import {
  PREFIX, JOB_SERVICE, MARK_AS_VIEWED, VIEWED_JOBS, 
} from "@/const/endpoint";


export const jobService = {
  getJobById: (params:any) => {
    return axiosClient.get(`${PREFIX}${JOB_SERVICE}/${params}`);
  },
  markAsViewd: (params : any) => {
    return axiosClient.post(`${PREFIX}${JOB_SERVICE}/${params}${MARK_AS_VIEWED}`)
  },
  getViewedJobs: (params : any) => {
    return axiosClient.get(`${PREFIX}${JOB_SERVICE}${VIEWED_JOBS}`, {params})
  }

};

