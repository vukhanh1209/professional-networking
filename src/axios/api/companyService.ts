import axiosClient from "../axiosClient";
import {
  PREFIX, COMPANY_SERVICE, 
} from "@/const/endpoint";


export const companyService = {
  getCompanyInfo: (id : string) => {
    return axiosClient.get(`${PREFIX}${COMPANY_SERVICE}/${id}`);
  },

};

