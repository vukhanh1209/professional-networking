import axiosClient from "../axiosClient";
import {
  // UPLOAD_IMAGE_ENDPOINT,
} from "../../const/endpoint";

// const api_endpoint = "https://api-stag.innovaz.io/v1/storage/user"

const UPLOAD_PRESET = ""
const CLOUD_NAME = "dh8gztcr3"
const CLOUDINARY = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/auto/upload`

export const uploadService = {

  uploadPDF: (file : any) => {
    const formData = new FormData();
    formData.append('file', file);
    // formData.append('upload_preset', UPLOAD_PRESET);
    return axiosClient.post(CLOUDINARY, formData);
  },

  // uploadImageType: (file:any) => {
  //   let formData = new FormData();
  //   formData.append("image", file);
  //   let endpoint =`${process.env.NEXT_PUBLIC_API_ENDPOINT}storage/user${UPLOAD_IMAGE_ENDPOINT}`;
  //   return axiosClient.post(endpoint, formData);
  // },
  
};