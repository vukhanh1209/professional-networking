import axiosClient from "../axiosClient";
import {
  GET_CONTENT_TEMPLATE_USER,
  GET_LIST_TEMPLATE,
  GET_TEMPLATE_CONTENT,
} from "../../const/endpoint";

export const templateService = {
  getList: (params: any) => {
    return axiosClient.get(GET_LIST_TEMPLATE, { params });
  },
  getContentUserTemplate: (params: any) => {
    return axiosClient.get(`${GET_CONTENT_TEMPLATE_USER}/${params}`);
  },
  getContentTemplate: (params: any) => {
    return axiosClient.get(`${GET_TEMPLATE_CONTENT}/${params}`);
  },
};
