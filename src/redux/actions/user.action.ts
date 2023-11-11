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
      notifyErrors(err?.message)
      return rejectWithValue(err?.message);
    }
  }
);

export const resetPassword = createAsyncThunk(
  "user/resetPassword",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const response = await userService.resetPassword(params);
      return response;
    }
    catch(err : any) {
      notifyErrors(err?.message)
      return rejectWithValue(err?.message);
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
      notifyErrors(err?.message)
      return rejectWithValue(err?.message);
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
      return rejectWithValue(err?.message);
    }
  }
);

export const deleteSavedJob = createAsyncThunk(
  "user/deleteSavedJob",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const response : any = await userService.deleteSavedJob(params);
      notifySuccess(response?.message);      
      return response;
    }
    catch(err : any) {
      notifyErrors(err?.message)
      return rejectWithValue(err?.message);
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
      notifyErrors(err?.message)
      return rejectWithValue(err?.message);
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
      return rejectWithValue(err?.message);
    }
  }
);