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
  "recruiter/recruiterLogIn",
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
      notifyErrors(err?.message)
      return rejectWithValue(err?.message);
    }
  }
);

export const recruiterGetPostedJobs = createAsyncThunk(
  "recruiter/recruiterGetPostedJobs",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const response : any = await recruiterService.getPostedJobs();
      return response;
    }
    catch (err : any) {
      notifyErrors(err?.message)
      return rejectWithValue(err?.message);
    }
  }
);

export const recruiterGetPostedJob = createAsyncThunk(
  "recruiter/recruiterGetPostedJob",
  async (jobId: string, { dispatch, getState, rejectWithValue }) => {
    try {
      const response : any = await recruiterService.getPostedJobById(jobId);
      return response;
    }
    catch (err : any) {
      notifyErrors(err?.message)
      return rejectWithValue(err?.message);
    }
  }
);

export const recruiterUpdateJob = createAsyncThunk(
  "recruiter/recruiterUpdateJob",
  async (request : any, { dispatch, getState, rejectWithValue }) => {
    try {
      const response : any = await recruiterService.updateJob(request);
      if(response) {
        notifySuccess("Cập nhật bài tuyển dụng thành công");
      }
      return response;
    }
    catch (err : any) {
      // notifyErrors(err?.message)
      // return rejectWithValue(err?.message);
    }
  }
);
