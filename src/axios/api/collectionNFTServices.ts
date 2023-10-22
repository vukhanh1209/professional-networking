
import axiosClient from "../axiosClient";
import {
    CREATE_COLLECTION_NFTS,
    RELEASE_DOMAIN,
    UPDATE_COLLECTION_NON_RELEASED
} from "../../const/endpoint";

export const collectionNFTServices = {

    create: (bodyParams:any) => {
      return axiosClient.post(CREATE_COLLECTION_NFTS, bodyParams)
    },

    updateNonRelease: (bodyParams:any) => {
      return axiosClient.put(UPDATE_COLLECTION_NON_RELEASED, bodyParams)
    },
  
    releaseDomain: (bodyParams:any) => {
      return axiosClient.post(RELEASE_DOMAIN, bodyParams)
    },
    addCollectionRelease: (bodyParams:any) => {
      return axiosClient.post(RELEASE_DOMAIN, bodyParams)
    },
    
}
  
  