import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "./rootReducer";
import { ApplicationResponse } from "@/types/recruiter.type";
import { recruiterApplicationById } from "../actions/recruiter.action";

const initialState = {
    isOpeningSidebar: false,
    applicationData: {} as ApplicationResponse
}

const recruiterSlice = createSlice({
    name: 'candidate',
    initialState: initialState,
    reducers: {
        onDisplaySidebar: (state) => {
            if(state.isOpeningSidebar === true) state.isOpeningSidebar = false;
            else state.isOpeningSidebar = true
        }
    },
    extraReducers: (builder) => {
        builder.addCase(recruiterApplicationById.fulfilled, (state, action : any) => {
            state.applicationData = action.payload
        })
    },
})
export default recruiterSlice.reducer;

export const {
    onDisplaySidebar
} = recruiterSlice.actions

export const selectIsOpeningSidebar = (state : RootState) => state.recruiter.isOpeningSidebar
export const selectApplicationData = (state : RootState) => state.recruiter.applicationData




