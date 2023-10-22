import axiosClient from "../axiosClient";
import {
  CANCEL_SELL_NFT,
  CHECK_IN,
  CREATE_SIGNATURE_META_BUY,
  CREATE_SIGNATURE_META_MINT,
  GET_DETAIL_NFT_BY_ID,
  GET_LIST_MARKETPLACE,
  GET_LIST_NFTS_MY_ASSET,
  GET_TICKET_INFO,
  MARK_TICKET_INFO,
  QR_METAMASK,
  SELL_NFT,
} from "../../const/endpoint";

export const nftsServices = {
  getListNFTsByUser: (params: any) => {
    return axiosClient.get(GET_LIST_NFTS_MY_ASSET, { params });
  },

  getListMarketplace: (params: any) => {
    return axiosClient.get(GET_LIST_MARKETPLACE, { params });
  },

  getTicketInfo: (params: any) => {
    return axiosClient.get(GET_TICKET_INFO, { params });
  },
  markTicketInfo: (bodyParams: any) => {
    return axiosClient.post(MARK_TICKET_INFO, bodyParams);
  },
  getDetailNFT: (_id: any) => {
    return axiosClient.get(`${GET_DETAIL_NFT_BY_ID}/${_id}`);
  },

  createSignatureMint: (bodyParams: any) => {
    return axiosClient.post(CREATE_SIGNATURE_META_MINT, bodyParams);
  },

  createSignatureBuy: (bodyParams: any) => {
    return axiosClient.post(CREATE_SIGNATURE_META_BUY, bodyParams);
  },

  sellNFT: (bodyParams: any) => {
    return axiosClient.post(SELL_NFT, bodyParams);
  },

  cancelSellNFT: (params: any) => {
    return axiosClient.put(`${CANCEL_SELL_NFT}/${params}`);
  },

  getQRMetamask: (bodyParams: any) => {
    return axiosClient.post(QR_METAMASK, bodyParams);
  },

  // getTicketInfo: (params: any) => {
  //   return axiosClient.get(GET_TICKET_INFO, { params });
  // },
  checkIn: (bodyParams: any) => {
    return axiosClient.post(CHECK_IN, bodyParams);
  },
};
