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