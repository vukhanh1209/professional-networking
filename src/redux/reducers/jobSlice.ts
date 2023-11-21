import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { authSignIn } from "../actions/auth.action";
import { RootState } from "./rootReducer";
import { getCompanyInfo } from "../actions/company.action";
import { searchByKeyword } from "../actions";


type OpeningJob = {
    address: string,
    companyLogo: string,
    companyName: string,
    companyType: string,
    createdDate: Date,
    description: string,
    jobId: number,
    skills: [],
    title: string,
    companyId: number,
    expiredDate: Date,
    requirements: string,
    jobType: string,
    location: string,
    isSaved: boolean,
    isApplied: boolean,
    minSalary: number,
    maxSalary: number,
    message: string,
    status: string,
    appliedAt: Date
}

const initialState = {
    jobs: [] as any[],
    totalPage: 0,
    totalJob: 0,
    currentPage: 0,
    selectedJob: 0,
}

const jobSlice = createSlice({
    name: 'job',
    initialState: initialState,
    reducers: {
        setSelectedJob: (state, action) => {
            state.selectedJob = action.payload
        }
    },
    extraReducers: (builder) => {
      builder.addCase(searchByKeyword.fulfilled, (state, action : any) => {
        state.jobs = action?.payload?.content;
        state.currentPage = action?.payload?.number;
        state.totalJob = action?.payload?.totalElements;
        state.totalPage = action?.payload?.totalPages;
        
      });
    },
  })
export default jobSlice.reducer;

export const {setSelectedJob} = jobSlice.actions

export const selectSearchJobsData = (state : RootState) => {
    return {
        jobs: state.job.jobs,
        totalPage: state.job.totalPage,
        totalJob: state.job.totalJob,
        currentPage: state.job.currentPage,
    }
}
export const selectTotalJob = (state : RootState) => state.job.totalJob

export const selectSelectedJob = (state : RootState) => state.job.selectedJob
export const selectJobDetailByIndex = (state : RootState) => state.job.jobs[state.job.selectedJob]