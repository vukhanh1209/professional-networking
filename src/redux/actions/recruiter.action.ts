import { recruiterService } from "@/axios/api/recruiterService";
import { LocalStorage } from "@/utils/LocalStorage";
import { notifyErrors, notifySuccess } from "@/utils/notification";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const recruiterRegister = createAsyncThunk(
    "recruiter/recruiterRegister",
    async (params: any, { dispatch, getState, rejectWithValue }) => {
      try {
        const response = await recruiterService.register(params);
        if(response.data) {
            notifySuccess("Gửi đơn đăng ký thành công. Vui lòng kiểm tra email của bạn")
        }
        return response;
      }
      catch(err : any) {
        notifyErrors(err?.message)
        return rejectWithValue(err?.message);
      }
  
    }
  );

export const recruiterLogIn = createAsyncThunk(
  "recruiter/recruiterSignIn",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const response : any = await recruiterService.logIn(params);
      if(response) {
        notifySuccess("Đăng nhập thành công");
        LocalStorage.setToken(response?.accessToken)
      }
      return response;
    }
    catch (err : any) {
      console.log("Log ~ file: recruiter.action.ts:37 ~ err:", err)
      notifyErrors(err?.message)
      return rejectWithValue(err?.message);
    }
  }
);