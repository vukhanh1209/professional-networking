import axiosClient from "../axiosClient";
import { UPDATE_CONTENT_TEMPLATE_USER } from "../../const/endpoint";

export const blockService = {
    updateBlockContent: (params: any) => {
        return axiosClient.put(`${UPDATE_CONTENT_TEMPLATE_USER}/${params._id}`,params)
    },
}