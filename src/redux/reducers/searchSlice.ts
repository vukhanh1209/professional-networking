import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { authSignIn } from "../actions/auth.action";
import { RootState } from "./rootReducer";
import { getCompanyInfo } from "../actions/company.action";
import { searchAllJobs, searchByKeyword } from "../actions";

export type searchFilterType = {
    location?: string,
    minSalary?: number,
    maxSalary?: number,
    companyType?: string,
    jobType?: string,
    candidatLevel?: string
}

const initialState = {
    searchFilter: {} as searchFilterType
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
        }
    },
    extraReducers: (builder) => {
    },
  })
export default searchSlice.reducer;

export const {setSearchFilter} = searchSlice.actions

export const selectSearchFilter = (state : RootState) => state.search.searchFilter
