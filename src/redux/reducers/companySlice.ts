import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { authSignIn } from "../actions/auth.actions";
import { RootState } from "./rootReducer";
import { getCompanyInfo } from "../actions/company.action";

type CompanyInfo = {
    address: string,
    companySize: any,
    companyType: any,
    countJobOpening: number,
    country: string | null,
    createdDate: string,
    description: string,
    foundedDate: string,
    id: number,
    industry: string,
    lastModifiedBy: string,
    lastModifiedDate: string,
    logo: string,
    name: string,
    phoneNumber: string,
    website: string,
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
        state.copanyInfo = action.payload?.company;
        state.openingJobs = action.payload?.jobOpenings;
      });
    },
  })
// export const {openModalNFT,closeModalNFT} = .actions;
export default companySlice.reducer;

export const selectCompanyInfo = (state : RootState) => state.company.copanyInfo ;
export const selectOpeningJobs = (state : RootState) => state.company.openingJobs ;

