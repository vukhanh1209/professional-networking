import { userService } from "@/axios/api/userService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const forgotPassword = createAsyncThunk(
  "user/forgotPassword",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    const response = await userService.forgotPassword(params);
    return response;
  }
);

export const resetPassword = createAsyncThunk(
  "user/resetPassword",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    const response = await userService.resetPassword(params);
    return response;
  }
);
