import { candidateProfileService } from "@/axios/api/candidateProfileService";
import { notifySuccess } from "@/utils/notification";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const getProfile = createAsyncThunk(
    "candidateProfile/getProfile",
    async (param: any, { dispatch, getState, rejectWithValue }) => {
      try {
        const response = await candidateProfileService.getProfile();
        return response;
      }
      catch(err : any) {
        return rejectWithValue(err?.message || err?.errorCode);
      }
    }
  );


  export const updateProfile = createAsyncThunk(
    "candidateProfile/updateProfile",
    async (param: any, { dispatch, getState, rejectWithValue }) => {
      try {
        const response : any = await candidateProfileService.updateProfile(param);
        if(response?.data) {
          notifySuccess(response?.message)
        }
        return response;
      }
      catch(err : any) {
        return rejectWithValue(err?.message || err?.errorCode);
      }
    }
  );

  export const addEducation = createAsyncThunk(
    "candidateProfile/addEducation",
    async (param: any, { dispatch, getState, rejectWithValue }) => {
      try {
        const response : any = await candidateProfileService.addEducation(param);
        if(response?.data) {
          notifySuccess(response?.message)
        }
        return response;
      }
      catch(err : any) {
        return rejectWithValue(err?.message || err?.errorCode);
      }
    }
  );

  export const addExperience = createAsyncThunk(
    "candidateProfile/addExperience",
    async (param: any, { dispatch, getState, rejectWithValue }) => {
      try {
        const response : any = await candidateProfileService.addExperience(param);
        if(response?.data) {
          notifySuccess(response?.message)
        }
        return response;
      }
      catch(err : any) {
        return rejectWithValue(err?.message || err?.errorCode);
      }
    }
  );

  export const writeAboutMe = createAsyncThunk(
    "candidateProfile/writeAboutMe",
    async (params: any, { dispatch, getState, rejectWithValue }) => {
      try {
        const response : any = await candidateProfileService.writeAboutMe(params);
        if(response?.data) {
          notifySuccess(response?.message)
        }
        return response;
      }
      catch(err : any) {
        return rejectWithValue(err?.message || err?.errorCode);
      }
    }
  );

  export const addSkill = createAsyncThunk(
    "candidateProfile/addSkill",
    async (params: any, { dispatch, getState, rejectWithValue }) => {
      try {
        const response : any = await candidateProfileService.addSkill(params);
        if(response?.data) {
          notifySuccess(response?.message)
        }
        return response;
      }
      catch(err : any) {
        return rejectWithValue(err?.message || err?.errorCode);
      }
    }
  );

  export const getAllSkill = createAsyncThunk(
    "candidateProfile/getAllSkill",
    async (params: any, { dispatch, getState, rejectWithValue }) => {
      try {
        const response : any = await candidateProfileService.getAllSkill();
        return response;
      }
      catch(err : any) {
        return rejectWithValue(err?.message || err?.errorCode);
      }
    }
  );
  

  