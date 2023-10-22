import { combineReducers } from "@reduxjs/toolkit";

import modalNFT from "./modalNFTSlice";


const rootReducer = combineReducers({
  alert,
  modalNFT,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
