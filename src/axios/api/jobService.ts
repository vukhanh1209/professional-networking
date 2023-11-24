import axiosClient from "../axiosClient";
import {
  PREFIX, JOB_SERVICE, MARK_AS_VIEWED, VIEWED_JOBS, SEARCH_BY_KEY, SEARCH_BY_SKILL, 
} from "@/const/endpoint";


export const jobService = {
  searchAllJobs : () => {
    return axiosClient.get(`${PREFIX}${JOB_SERVICE}`)
  },
  searchByKeyword : (params : any) => {
    return axiosClient.get(`${PREFIX}${JOB_SERVICE}${SEARCH_BY_KEY}`, {params})
  },
  searchBySkill : (params : any) => {
    return axiosClient.get(`${PREFIX}${JOB_SERVICE}${SEARCH_BY_SKILL}`, {params})
  },
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

