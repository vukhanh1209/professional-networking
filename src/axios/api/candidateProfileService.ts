import axiosClient from "../axiosClient";
import {
  PREFIX, COMPANY_SERVICE, GET_PROFILE, UPDATE_PROFILE, ADD_EDUCATION, ADD_EXPERIENCE, WRITE_ABOUT_ME, ADD_SKILL, GET_ALL_SKILL, 
} from "@/const/endpoint";


export const candidateProfileService = {
  getProfile: () => {
    return axiosClient.get(GET_PROFILE);
  },
  updateProfile: (params: any) => {
    return axiosClient.put(UPDATE_PROFILE, params);
  },
  addEducation: (params: any) => {
    return axiosClient.post(ADD_EDUCATION, params);
  },
  addExperience: (params: any) => {
    return axiosClient.post(ADD_EXPERIENCE, params);
  },
  writeAboutMe: (params: any) => {
    return axiosClient.post(WRITE_ABOUT_ME, params);
  },
  addSkill: (reqBody: any) => {
    return axiosClient.post(ADD_SKILL, reqBody);
  },
  getAllSkill: () => {
    return axiosClient.get(GET_ALL_SKILL);
  }

};