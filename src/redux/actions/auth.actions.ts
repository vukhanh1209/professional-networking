import { createAsyncThunk, Dispatch } from "@reduxjs/toolkit";
import { authService } from "@/axios/api/authService";
import { LocalStorage } from "@/utils/LocalStorage";
import { handleServiceResponse } from "@/utils/handleServiceResponse";
import { notifyErrors, notifySuccess } from "@/utils/notification";


export const authRegister = createAsyncThunk(
    "auth/authRegister",
    async (params: any, { dispatch, getState, rejectWithValue }) => {
      try {
        const response = await authService.register(params);
        return response;
      }
      catch(err : any) {
        notifyErrors(err?.message)
        return rejectWithValue(err?.message);
      }
  
    }
  );

export const authSignIn = createAsyncThunk(
  "auth/authSignIn",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const response : any = await authService.signIn(params);
      if(response) {
        notifySuccess("Đăng nhập thành công");
        LocalStorage.setToken(response?.accessToken)
        const profile = {
          username: response?.username,
          firstName: response?.firstname,
          lastName: response?.lastname,
        }
        LocalStorage.setProfile(profile)
    
      }
      return response;
    }
    catch (err : any) {
      notifyErrors(err?.message)
      return rejectWithValue(err?.message);
    }
  }
);

export const authVerify = createAsyncThunk(
  "auth/authVerify",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const response = await authService.verifyAccount(params);
      return response;
  
    }
    catch(err : any) {
      notifyErrors(err?.message)
      return rejectWithValue(err?.message);
    }
  }
);

export const authRegenerateOTP = createAsyncThunk(
  "auth/authRegenerateOTP",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const response = await authService.regenerateOTP(params);
      return response;
  
    }
    catch(err : any) {
      notifyErrors(err?.message)
      return rejectWithValue(err?.message);
    }
  }
);

