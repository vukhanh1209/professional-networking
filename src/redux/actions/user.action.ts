import { userService } from "@/axios/api/userService";
import { notifyErrors, notifySuccess } from "@/utils/notification";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const forgotPassword = createAsyncThunk(
  "user/forgotPassword",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const response = await userService.forgotPassword(params);
      return response;
    }
    catch(err : any) {
      notifyErrors(err?.message || err?.errorCode)
      return rejectWithValue(err?.message || err?.errorCode);
    }
  }
);

export const changePassword = createAsyncThunk(
  "user/changePassword",
  async (requestBody: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const response : any = await userService.changePassword(requestBody);
      if(response.status === "OK") {
        notifySuccess(response.message)
      } 
      return response;
    }
    catch(err : any) {
      notifyErrors(err?.message || err?.errorCode)
      return rejectWithValue(err?.message || err?.errorCode);
    }
  }
);

export const resetPassword = createAsyncThunk(
  "user/resetPassword",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const response : any = await userService.resetPassword(params);
      notifySuccess(response?.message);   
      return response;
    }
    catch(err : any) {
      notifyErrors(err?.message || err?.errorCode)
      return rejectWithValue(err?.message || err?.errorCode);
    }
  }
);

export const saveJob = createAsyncThunk(
  "user/saveJob",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const response : any = await userService.saveJob(params);
      notifySuccess(response?.message);      
      return response;
    }
    catch(err : any) {
      notifyErrors(err?.message || err?.errorCode)
      return rejectWithValue(err?.message || err?.errorCode);
    }
  }
);

export const getSavedJobs = createAsyncThunk(
  "user/getSavedJobs",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const response : any = await userService.getSavedJobs(params);
      return response;
    }
    catch(err : any) {
      return rejectWithValue(err?.message || err?.errorCode);
    }
  }
);

export const deleteSavedJob = createAsyncThunk(
  "user/deleteSavedJob",
  async (id: string, { dispatch, getState, rejectWithValue }) => {
    try {
      const response : any = await userService.deleteSavedJob(id);
      notifySuccess(response?.message);      
      return response;
    }
    catch(err : any) {
      notifyErrors(err?.message || err?.errorCode)
      return rejectWithValue(err?.message || err?.errorCode);
    }
  }
);

export const applyJob = createAsyncThunk(
  "user/applyJob",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const response : any = await userService.applyJob(params);
      notifySuccess(response?.message);      
      return response;
    }
    catch(err : any) {
      notifyErrors(err?.message || err?.errorCode)
      return rejectWithValue(err?.message || err?.errorCode);
    }
  }
);

export const getAppliedJobs = createAsyncThunk(
  "user/getAppliedJobs",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const response : any = await userService.getAppliedJobs(params);
      return response;
    }
    catch(err : any) {
      return rejectWithValue(err?.message || err?.errorCode);
    }
  }
);

export const writeCoverLetter = createAsyncThunk(
  "user/writeCoverLetter",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const response : any = await userService.writeCoverLetter(params);
      notifySuccess(response?.message)
      return response;
    }
    catch(err : any) {
      return rejectWithValue(err?.message || err?.errorCode);
    }
  }
);

export const getCandidateCV = createAsyncThunk(
  "user/getCandidateCV",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const response : any = await userService.getCandidateCV();
      return response;
    }
    catch(err : any) {
      return rejectWithValue(err?.message || err?.errorCode);
    }
  }
);


export const uploadDefaultCV = createAsyncThunk(
  "user/uploadDefaultCV",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const response : any = await userService.uploadDefaultCV(params);
      notifySuccess(response?.message)
      return response;
    }
    catch(err : any) {
      return rejectWithValue(err?.message || err?.errorCode);
    }
  }
);