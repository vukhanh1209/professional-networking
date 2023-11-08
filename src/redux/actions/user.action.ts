import { userService } from "@/axios/api/userService";
import { notifyErrors } from "@/utils/notification";
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
