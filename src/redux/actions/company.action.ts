import { companyService } from "@/axios/api/companyService";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const getCompanyInfo = createAsyncThunk(
    "comapany/getCompanyInfo",
    async (param: string, { dispatch, getState, rejectWithValue }) => {
      try {
        const response = await companyService.getCompanyInfo(param);
        
        return response;
      }
      catch(err : any) {
        return rejectWithValue(err?.message || err?.errorCode);
      }
    }
  );