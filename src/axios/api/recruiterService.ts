import axiosClient from "../axiosClient";
import {
  PREFIX, JOB_SERVICE, MARK_AS_VIEWED, VIEWED_JOBS, SEARCH_BY_KEY, SEARCH_BY_SKILL, LOG_IN, REGISTER_RECRUITER, 
} from "@/const/endpoint";


export const recruiterService = {
  logIn : (params : any) => {
    return axiosClient.post(LOG_IN, params)
  },
  register : (params : any) => {
    return axiosClient.post(REGISTER_RECRUITER, params)
  },

};

