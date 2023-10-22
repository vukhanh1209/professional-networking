

import axiosClient from "../axiosClient";
import { GET_LIST_CHAIN } from "../../const/endpoint";
export const smartContractService = {
    getListChain:()=>{
        return axiosClient.get(GET_LIST_CHAIN);
    }
}