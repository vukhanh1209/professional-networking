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
        notifyErrors(err?.message || err?.errorCode)
        return rejectWithValue(err?.message || err?.errorCode);
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
      notifyErrors(err?.message || err?.errorCode)
      return rejectWithValue(err?.message || err?.errorCode);
    }
  }
);

export const recruiterGetPostedJobs = createAsyncThunk(
  "recruiter/recruiterGetPostedJobs",
  async (page: number, { dispatch, getState, rejectWithValue }) => {
    try {
      const response : any = await recruiterService.getPostedJobs(page);
      return response;
    }
    catch (err : any) {
      // notifyErrors(err?.message || err?.errorCode)
      return rejectWithValue(err?.message || err?.errorCode);
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
      // notifyErrors(err?.message || err?.errorCode)
      return rejectWithValue(err?.message || err?.errorCode);
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
      // notifyErrors(err?.message || err?.errorCode)
      // return rejectWithValue(err?.message || err?.errorCode);
    }
  }
);

export const recruiterPostJob = createAsyncThunk(
  "recruiter/recruiterPostJob",
  async (requestBody : any, { dispatch, getState, rejectWithValue }) => {
    try {
      const response : any = await recruiterService.postJob(requestBody);
      if(response) {
        notifySuccess("Đăng bài tuyển dụng thành công");
      }
      return response;
    }
    catch (err : any) {
      notifyErrors(err?.message || err?.errorCode)
      return rejectWithValue(err?.message || err?.errorCode);
    }
  }
);

export const recruiterDeleteJob = createAsyncThunk(
  "recruiter/recruiterDeleteJob",
  async (jobId : string, { dispatch, getState, rejectWithValue }) => {
    try {
      const response : any = await recruiterService.deleteJob(jobId);
      if(response) {
        notifySuccess("Xóa bài tuyển dụng thành công");
      }
      return response;
    }
    catch (err : any) {
      notifyErrors(err?.message || err?.errorCode)
      return rejectWithValue(err?.message || err?.errorCode);
    }
  }
);

export const recruiterAllApplication = createAsyncThunk(
  "recruiter/recruiterAllApplication",
  async (params : any, { dispatch, getState, rejectWithValue }) => {
    try {
      const response : any = await recruiterService.getAllApplication(params);
      return response;
    }
    catch (err : any) {
      // notifyErrors(err?.message || err?.errorCode)
      return rejectWithValue(err?.message || err?.errorCode);
    }
  }
);

export const recruiterApplicationById = createAsyncThunk(
  "recruiter/recruiterApplicationById",
  async (applicationId: string, { dispatch, getState, rejectWithValue }) => {
    try {
      const response : any = await recruiterService.getApplicationById(applicationId);
      return response;
    }
    catch (err : any) {
      // notifyErrors(err?.message || err?.errorCode)
      return rejectWithValue(err?.message || err?.errorCode);
    }
  }
);

export const recruiterUpdateApplication = createAsyncThunk(
  "recruiter/recruiterUpdateApplication",
  async (request: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const response : any = await recruiterService.updateApplication(request);
      if(response) {
        notifySuccess("Cập nhật trạng thái đơn ứng tuyển thành công");
      }
      return response;
    }
    catch (err : any) {
      notifyErrors(err?.message || err?.errorCode)
      return rejectWithValue(err?.message || err?.errorCode);
    }
  }
);

export const recruiterForgotPassword = createAsyncThunk(
  "recruiter/recruiterForgotPassword",
  async (request: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const response : any = await recruiterService.forgotPassword(request);
      return response;
    }
    catch (err : any) {
      notifyErrors(err?.message || err?.errorCode)
      return rejectWithValue(err?.message || err?.errorCode);
    }
  }
);

export const recruiterResetPassword = createAsyncThunk(
  "recruiter/recruiterResetPassword",
  async (request: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const response : any = await recruiterService.resetPassword(request);
      return response;
    }
    catch (err : any) {
      notifyErrors(err?.message || err?.errorCode)
      return rejectWithValue(err?.message || err?.errorCode);
    }
  }
);

export const recruiterUpdateProfile = createAsyncThunk(
  "recruiter/recruiterUpdateProfile",
  async (request: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const response : any = await recruiterService.updateCompanyProfile(request);
      if(response.status === 200) {
        notifySuccess("Cập nhật hồ sơ công ty thành công")
      }
      return response;
    }
    catch (err : any) {
      notifyErrors(err?.message || err?.errorCode)
      return rejectWithValue(err?.message || err?.errorCode);
    }
  }
);

export const recruiterGetProfile = createAsyncThunk(
  "recruiter/recruiterGetProfile",
  async (request: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const response : any = await recruiterService.getCompanyProfile();
      return response;
    }
    catch (err : any) {
      // notifyErrors(err?.message || err?.errorCode)
      return rejectWithValue(err?.message || err?.errorCode);
    }
  }
);

export const recruiterChangePassword = createAsyncThunk(
  "recruiter/recruiterChangePassword",
  async (requestBody: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const response : any = await recruiterService.changePassword(requestBody);
      if(response.status === "OK") {
        notifySuccess(response.message)
      } 
      return response;
    }
    catch (err : any) {
      notifyErrors(err?.message || err?.errorCode)
      return rejectWithValue(err?.message || err?.errorCode);
    }
  }
);