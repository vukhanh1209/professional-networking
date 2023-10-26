import { LocalStorage } from "@/utils/LocalStorage";
import { createAsyncThunk, Dispatch } from "@reduxjs/toolkit";

// import { ISignInParams } from "@/models/redux-models";

import { authService } from "@/axios/api/authService";

import * as actions from ".";
import { notifyErrors } from "@/utils/notification";
// import { toastMessage } from "@/app/utils/lib";
// import { addAlert } from "../reducers/alert";

export const authRegister = createAsyncThunk(
    "auth/authRegister",
    async (params: any, { dispatch, getState, rejectWithValue }) => {
      try {
        const response = await authService.register(params);
        console.log("Log ~ file: auth.actions.ts:17 ~ response:", response)
        return response;
        
      } 
      catch (error) {
        console.log("Log ~ file: auth.actions.ts:22 ~ error:", error)
      }
    }
  );

export const authSignIn = createAsyncThunk(
  "auth/authSignIn",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const response = await authService.signIn(params);
      console.log("Log ~ file: auth.actions.ts:32 ~ response:", response)
      return response;
      if (response) {
        // LocalStorage.setToken(response.data.access_token);
        // dispatch(actions.getProfile(response.data.public_address));
        
      }
    } 
    catch (error) {
      console.log("Log ~ file: auth.actions.ts:38 ~ error:", error)
    }
  }
);

export const authVerify = createAsyncThunk(
  "auth/authVerify",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const response = await authService.verifyAccount(params);
      console.log("Log ~ file: auth.actions.ts:17 ~ response:", response)
      return response;
      
    } 
    catch (error) {
      console.log("Log ~ file: auth.actions.ts:22 ~ error:", error)
    }
  }
);

export const authRegenerateOTP = createAsyncThunk(
  "auth/authRegenerateOTP",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const response = await authService.regenerateOTP(params);
      console.log("Log ~ file: auth.actions.ts:17 ~ response:", response)
      return response;
      
    } 
    catch (error) {
      console.log("Log ~ file: auth.actions.ts:22 ~ error:", error)
    }
  }
);

// export const authLoginGoogle = createAsyncThunk(
//   "auth/authLoginGoogle",
//   async (params: any, { dispatch, getState, rejectWithValue }) => {
//     try {
//       const response = await authService.loginGoogle(params);
//       const { data } = response;

//       if (data && data.access_token) {
//         LocalStorage.setToken(data.access_token);
//       }
//       await dispatch(actions.getProfile({}));
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err);
//     }
//   }
// );
// export const authLogoutGoogle = createAsyncThunk(
//   "auth/authLogoutGoogle",
//   async (props: any, { dispatch, getState }) => {
//     dispatch(authLogout());
//     LocalStorage.clearToken();
//   }
// );
// export const authLogout =
//   () => async (dispatch: (arg0: { type: string }) => void, getState: any) => {
//     dispatch({ type: "AUTH_DESTROY_SESSION" });
//     localStorage.clear();
//   };
