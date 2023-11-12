import { uploadService } from "@/axios/api/uploadService";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const uploadPDF = createAsyncThunk(
    "upload/uploadPDF",
    async (params: File, { dispatch, getState, rejectWithValue }) => {
      try {
        const response = await uploadService.uploadPDF(params);
        
        return response;
      }
      catch(err : any) {
        return rejectWithValue(err?.message);
      }
    }
  );
  