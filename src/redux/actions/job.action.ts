import { jobService } from "@/axios/api/jobService";
import { notifyErrors } from "@/utils/notification";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const jobGetDataById = createAsyncThunk(
  "job/jobGetDataById",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const response = await jobService.getJobById(params);
      return response;
    }
    catch(err : any) {
      notifyErrors(err?.message)
      return rejectWithValue(err?.message);
    }
  }
);

export const markAsViewd = createAsyncThunk(
  "job/markAsViewd",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const response = await jobService.markAsViewd(params);
      
      return response;
    }
    catch(err : any) {
      notifyErrors(err?.message)
      return rejectWithValue(err?.message);
    }
  }
);

export const getViewedJobs = createAsyncThunk(
  "job/getViewedJobs",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const response = await jobService.getViewedJobs(params);
      
      return response;
    }
    catch(err : any) {
      return rejectWithValue(err?.message);
    }
  }
);

export const searchAllJobs = createAsyncThunk(
  "job/searchAllJobs",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const response = await jobService.searchAllJobs();
      
      return response;
    }
    catch(err : any) {
      return rejectWithValue(err?.message);
    }
  }
);

export const searchByKeyword = createAsyncThunk(
  "job/searchByKeyword",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      let queryString = "";
      if(params?.keyword) queryString += `keyword=${params.keyword}`
      if(params?.location) queryString += `&location=${params.location}`
      for (let key in params) {
        const value = params[key];
        if(value && typeof(value) === "object" && value?.length > 0) {
          let childQueryString = "&" + key + "=";
          childQueryString += value.join(`&${key}=`)
          queryString += childQueryString;
        }
      }
      const response = await jobService.searchByKeyword(queryString);
      
      return response;
    }
    catch(err : any) {
      return rejectWithValue(err?.message);
    }
  }
);

export const searchBySkill = createAsyncThunk(
  "job/searchBySkill",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const response = await jobService.searchBySkill(params);
      
      return response;
    }
    catch(err : any) {
      return rejectWithValue(err?.message);
    }
  }
);

