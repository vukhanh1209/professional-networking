import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "./rootReducer";


export type searchFilterType = {
    location?: string,
    minSalary?: number,
    maxSalary?: number,
    companyType?: string,
    jobType?: string,
    candidatLevel?: string
}

const initialState = {
    searchFilter: {} as searchFilterType,
    isOpenFilterModal: false,
    candidateLevelFilter: [] as string[],
    companyTypeFilter: [] as string[],
    jobTypeFilter: [] as string[],
    filterCount: 0
}

const searchSlice = createSlice({
    name: 'job',
    initialState: initialState,
    reducers: {
        setSearchFilter: (state, action) => {
            state.searchFilter = {
                ...state.searchFilter,
                ...action.payload
            }
        },
        openFilterModal: (state) => {
            state.isOpenFilterModal = true
        },
        closeFilterModal: (state) => {
            state.isOpenFilterModal = false
        },
        setCandidateLevelFilter: (state, action) => {
            const currentIndex = state.candidateLevelFilter.findIndex((item : string) => item === action.payload)
            if(currentIndex >= 0) {
                let currentState = state.candidateLevelFilter
                currentState.splice(currentIndex, 1)
                state.candidateLevelFilter = currentState
                state.filterCount -= 1;
            }
            else {
                state.candidateLevelFilter.push(action.payload)
                state.filterCount += 1;
            }
        },
        setCompanyTypeFilter: (state, action) => {
            const currentIndex = state.companyTypeFilter.findIndex((item : string) => item === action.payload)
            if(currentIndex >= 0) {
                let currentState = state.companyTypeFilter
                currentState.splice(currentIndex, 1)
                state.companyTypeFilter = currentState
                state.filterCount -= 1;
            }
            else {
                state.companyTypeFilter.push(action.payload)
                state.filterCount += 1;
            }
        },
        setJobTypeFilter: (state, action) => {
            const currentIndex = state.jobTypeFilter.findIndex((item : string) => item === action.payload)
            if(currentIndex >= 0) {
                let currentState = state.jobTypeFilter
                currentState.splice(currentIndex, 1)
                state.jobTypeFilter = currentState
                state.filterCount -= 1;
            }
            else {
                state.jobTypeFilter.push(action.payload)
                state.filterCount += 1;
            }
        },
        deleteFilter: (state) => {
            state.candidateLevelFilter = [];
            state.companyTypeFilter = [];
            state.jobTypeFilter = [];
            state.filterCount = 0;
        }
    },
    extraReducers: (builder) => {
    },
  })
export default searchSlice.reducer;

export const {setSearchFilter, openFilterModal, closeFilterModal, setCandidateLevelFilter, setCompanyTypeFilter, setJobTypeFilter, deleteFilter} = searchSlice.actions

export const selectSearchFilter = (state : RootState) => state.search.searchFilter
export const selectIsOpenFilterModal = (state : RootState) => state.search.isOpenFilterModal
export const selectJobTypeFilter = (state : RootState) => state.search.jobTypeFilter
export const selectCompanyTypeFilter = (state : RootState) => state.search.companyTypeFilter
export const selectCandidateLevelFilter = (state : RootState) => state.search.candidateLevelFilter
export const selectFilterCount = (state : RootState) => state.search.filterCount;

