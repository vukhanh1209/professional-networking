import axiosClient from "../axiosClient";
import {
  PREFIX, JOB_SERVICE
} from "@/const/endpoint";


export const jobService = {
  getJobById: (params:any) => {
    return axiosClient.get(`${PREFIX}${JOB_SERVICE}/${params}`);
  },

};