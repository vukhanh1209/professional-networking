import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { authSignIn } from "../actions/auth.action";
import { RootState } from "./rootReducer";
import { getCompanyInfo } from "../actions/company.action";

type CompanyInfo = {
    address: string,
    companySize: any,
    companyType: any,
    countJobOpenings: number,
    country: string | null,
    createdDate: string,
    description: string,
    foundedDate: string,
    companyId: number,
    industry: string,
    lastModifiedBy: string,
    lastModifiedDate: string,
    logo: string,
    companyName: string,
    phoneNumber: string,
    website: string,
    companyLogo: string | null,
}

type OpeningJob = {
    address: string,
    companyLogo: string,
    companyName: string,
    companyType: string,
    createdDate: string,
    description: string,
    jobId: number,
    skills: [],
    title: string,
}

const initialState = {
    copanyInfo : {} as CompanyInfo,
    openingJobs: [] as OpeningJob[],
}

const companySlice = createSlice({
    name: 'company',
    initialState: initialState,
    reducers: {
  
    },
    extraReducers: (builder) => {
      builder.addCase(getCompanyInfo.fulfilled, (state, action : any) => {
        state.copanyInfo = action.payload;
        state.openingJobs = action.payload?.jobOpenings;
      });
    },
  })

export default companySlice.reducer;

export const selectCompanyInfo = (state : RootState) => state.company.copanyInfo ;
export const selectOpeningJobs = (state : RootState) => state.company.openingJobs ;

