/**
 * * BASE
 */
const ROUTER_DAPP = "dapp";
const ROUTER_COLLECTION = "nft";
/**
 * * Upload
 * https://rinz.atlassian.net/wiki/spaces/IN/pages/330530844/User+Storage#2.-Development%3A
 */
export const PREFIX = "iapi";
export const UPLOAD_ENDPOINT = "uploader";
// export const UPLOAD_IMAGE_ENDPOINT = `${UPLOAD_ENDPOINT}/${PREFIX}/image`
export const UPLOAD_IMAGE_ENDPOINT = "/upload/collection";
export const UPLOAD_IMAGE_SECURE_ENDPOINT = `${UPLOAD_ENDPOINT}/secure/image`;

/**
 * * Auth
 * https://rinz.atlassian.net/wiki/spaces/IN/pages/322601249/Authentication#2.-Development%3A
 */
const routerAuth = "auth";
export const AUTH_GET_SIGN_MESSAGE_ENDPOINT = `${ROUTER_DAPP}/${routerAuth}/sign`;
export const AUTH_SIGN_IN_ENDPOINT = `${ROUTER_DAPP}/${routerAuth}/sign_in`;
export const AUTH_SIGN_IN_GOOGLE_ENDPOINT = `${ROUTER_DAPP}/${routerAuth}/sign_in/google`;
/**
 * * User
 * https://rinz.atlassian.net/wiki/spaces/IN/pages/325025793/User?focusedCommentId=355270674#A.-Overview
 */
const routerUser = "user";
export const GET_PROFILE_BY_ADDRESS = `${ROUTER_DAPP}/${routerUser}/info/address`;
export const GET_PROFILE = `${ROUTER_DAPP}/${routerUser}/profile`;
export const UPDATE_PROFILE = `${ROUTER_DAPP}/${routerUser}/info/update`;
export const GET_COLLECTION_DETAIL = `${ROUTER_DAPP}/${routerUser}/smc/detail`;
/**
 * USER API KEY
 */
export const USER_API_KEY = `${ROUTER_DAPP}/${routerUser}/api_key`;
/**
 * Submit IPN
 */
export const USER_CALLBACK_URL = `${ROUTER_DAPP}/${routerUser}/callback`;

// Template
export const GET_LIST_TEMPLATE_BY_USER = `${ROUTER_DAPP}/${routerUser}/templates/list`;
export const ADD_TEMPLATE_FOR_USER = `${ROUTER_DAPP}/${routerUser}/purchase/template`;

// Collections
export const GET_LIST_COLLECTIONS_BY_USER = `${ROUTER_DAPP}/${routerUser}/smc/list`;
export const ADD_COLLECTIONS_RELEASE = `${ROUTER_DAPP}/${routerUser}/smc/release`;

//Explore
export const GET_LIST_EXPLORE_BY_USER = `${ROUTER_DAPP}/explore/website`;
/**
 * * Template
 * https://rinz.atlassian.net/wiki/spaces/IN/pages/322732088/Templates#2.-Development%3A
 */
const routerTemplate = "template";
export const GET_LIST_TEMPLATE = `${ROUTER_DAPP}/${routerTemplate}/list`;

/**
 * * NFT Smart Contract
 * https://rinz.atlassian.net/wiki/spaces/IN/pages/331776037/Contracts#2.-Development%3A
 */
const routerNFTSmartContract = "/nft/smc";
export const CREATE_COLLECTION_NFTS = `${routerNFTSmartContract}/create`;
export const UPDATE_COLLECTION_NON_RELEASED = `${routerNFTSmartContract}/non_released`;
export const RELEASE_DOMAIN = `${routerNFTSmartContract}/release`;

/**
 * * NFTs Marketplace
 * https://rinz.atlassian.net/wiki/spaces/IN/pages/331776037/Contracts#2.-Development%3A
 */
const routerNFT = "/nft";
export const GET_LIST_MARKETPLACE = `${routerNFT}/list`;
export const GET_LIST_NFTS_MY_ASSET = `${routerNFT}/user`;
export const GET_TICKET_INFO = `${routerNFT}/event/ticket_info`;
export const MARK_TICKET_INFO = `${routerNFT}/event/mark_ticket`;

export const GET_DETAIL_NFT_BY_ID = `${routerNFT}`;

export const CREATE_SIGNATURE_META_MINT = `${routerNFT}/smc/signature`;
export const CREATE_SIGNATURE_META_BUY = `${routerNFT}/smc/signature/buy_nft`;

export const SELL_NFT = `${routerNFT}/sell`;
export const CANCEL_SELL_NFT = `${routerNFT}/cancel_sell`;

export const QR_METAMASK = `${routerNFT}/qr/metamask`;

/**
 * TICKET EVENT
 */
export const CHECK_IN = `${routerNFT}/event/check_in`;

/**
 * TEMPLATE CONTENT
 */
export const GET_CONTENT_TEMPLATE_USER = `${ROUTER_DAPP}/user/template/content`;
export const UPDATE_CONTENT_TEMPLATE_USER = `${ROUTER_DAPP}/user/template/block`;
export const GET_TEMPLATE_CONTENT = `${ROUTER_DAPP}/template/content`;
/**
 * ENS NAME
 */
export const GET_ENS_NAME_USER = `${ROUTER_DAPP}/user/ens_name/list`;
export const UPDATE_ENS_NAME_USER = `${ROUTER_DAPP}/user/ens_name/update`;
/**
 * Smart contract
 */
const routerSmartContract = "smc";
export const GET_LIST_CHAIN = `${ROUTER_DAPP}/${routerSmartContract}/chain/list`;
