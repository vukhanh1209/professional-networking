import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "./rootReducer";
import { searchAllJobs, searchByKeyword } from "../actions";


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

type JobDataType = {
  jobs: any[],
  totalPage: number,
  totalJob: number,
  currentPage: number,
}

const initialState = {
    jobData: {
      jobs: [],
      totalPage: 0,
      totalJob: 0,
      currentPage: 0,
    } as JobDataType,
    selectedJob: 0,
    isLoading: false,
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
      builder.addCase(searchByKeyword.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(searchAllJobs.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(searchByKeyword.fulfilled, (state, action : any) => {
        state.jobData = {
          jobs: action?.payload?.content, 
          totalPage: action?.payload?.totalPages, 
          totalJob: action?.payload?.totalElements, 
          currentPage: action?.payload?.number
        }
        state.isLoading = false;
      });
      builder.addCase(searchAllJobs.fulfilled, (state, action : any) => {
        state.jobData = {
          jobs: action?.payload?.content, 
          totalPage: action?.payload?.totalPages, 
          totalJob: action?.payload?.totalElements, 
          currentPage: action?.payload?.number
        }
        state.isLoading = false;
      });
    },
  })
export default jobSlice.reducer;

export const {setSelectedJob} = jobSlice.actions

export const selectSearchJobsData = (state : RootState) => state.job.jobData
export const selectTotalJob = (state : RootState) => state.job.jobData.totalJob

export const selectSelectedJob = (state : RootState) => state.job.selectedJob
export const selectJobDetailByIndex = (state : RootState) => state.job.jobData.jobs[state.job.selectedJob]
export const selectSearchingStatus = (state : RootState) => state.job.isLoading