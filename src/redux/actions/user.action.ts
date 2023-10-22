import { nftsServices } from "@/axios/api/nftsServices";
import { userServices } from "@/axios/api/userServices";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Get Profile
export const getProfile = createAsyncThunk(
  "user/getProfile",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const response = await userServices.profile(params);
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

// Update Profile
export const updateProfile = createAsyncThunk(
  "user/updateProfile",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const response = await userServices.updateProfile(params);
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
// Update ens name
export const updateEnsNameUser = createAsyncThunk(
  "user/updateEnsNameUser",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const response = await userServices.updateEnsNameUser(params);
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
// Get ens name
export const getEnsNameUser = createAsyncThunk(
  "user/getEnsNameUser",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const response = await userServices.getEnsNameUser(params);
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
// Add template for USER
export const addTemplateForUser = createAsyncThunk(
  "user/addTemplateForUser",
  async (
    params: { template: string },
    { dispatch, getState, rejectWithValue }
  ) => {
    try {
      const response = await userServices.addTemplate(params);
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

// Get List templates of user
export const getListTemplateByUser = createAsyncThunk(
  "user/getListTemplateByUser",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const response = await userServices.getListTemplateByUser(params);
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

//Get list explore of user
export const getListExploreByUser = createAsyncThunk(
  "getListExploreByUser",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const response = await userServices.getListExploreByUser(params);
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const getAllListExploreByUser = createAsyncThunk(
  "getAllListExploreByUser",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const response = await userServices.getListExploreByUser(params);
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

// Get List collecitons of user
export const getListCollectionsByUser = createAsyncThunk(
  "user/getListCollectionsByUser",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const response = await userServices.getListCollectionsByUser(params);
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
// Get List collecitons of user
export const getListMoreCollectionsByUser = createAsyncThunk(
  "user/getListMoreCollectionsByUser",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const response = await userServices.getListCollectionsByUser(params);
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

// Get user's collection detail
export const getCollectionUserDetail = createAsyncThunk(
  "user/getCollectionUserDetail",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const response = await userServices.getUserCollectionDetail(params);
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

// Get List My asset NFTs of user
export const getListMyAssetNFTs = createAsyncThunk(
  "user/getListMyAssetNFTs",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const response = await nftsServices.getListNFTsByUser(params);
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
// Get List marketplace NFTs of user
export const getListMarketplace = createAsyncThunk(
  "user/getListMarketplace",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const response = await nftsServices.getListMarketplace(params);
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
