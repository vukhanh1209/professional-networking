import axiosClient from "../axiosClient";
import {
  ADD_COLLECTIONS_RELEASE,
  ADD_TEMPLATE_FOR_USER,
  GET_COLLECTION_DETAIL,
  GET_ENS_NAME_USER,
  GET_LIST_COLLECTIONS_BY_USER,
  GET_LIST_EXPLORE_BY_USER,
  GET_LIST_TEMPLATE_BY_USER,
  GET_PROFILE,
  UPDATE_ENS_NAME_USER,
  UPDATE_PROFILE,
} from "@/const/endpoint";

export const userServices = {
  profile: (params: any) => {
    return axiosClient.get(`${GET_PROFILE}`);
  },

  updateProfile: (bodyParams: any) => {
    return axiosClient.put(UPDATE_PROFILE, bodyParams);
  },
  getListTemplateByUser: (params: any) => {
    return axiosClient.get(GET_LIST_TEMPLATE_BY_USER, { params });
  },
  getEnsNameUser: (params: any) => {
    return axiosClient.get(GET_ENS_NAME_USER, { params });
  },
  updateEnsNameUser: (bodyParams: any) => {
    return axiosClient.put(UPDATE_ENS_NAME_USER, bodyParams);
  },
  addTemplate: (bodyParams: any) => {
    return axiosClient.post(ADD_TEMPLATE_FOR_USER, bodyParams);
  },
  addRelease: (bodyParams: any) => {
    return axiosClient.post(ADD_COLLECTIONS_RELEASE, bodyParams);
  },

  getListCollectionsByUser: (params: any) => {
    return axiosClient.get(GET_LIST_COLLECTIONS_BY_USER, { params });
  },

  getUserCollectionDetail: (params: any) => {
    return axiosClient.get(GET_COLLECTION_DETAIL, { params });
  },
  getListExploreByUser: (params: any) => {
    return axiosClient.get(GET_LIST_EXPLORE_BY_USER, { params });
  },
};
