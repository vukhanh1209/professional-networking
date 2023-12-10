import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "./rootReducer";

const initialState = {
    isOpeningSidebar: false,
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
    },
})
export default recruiterSlice.reducer;

export const {
    onDisplaySidebar
} = recruiterSlice.actions

export const selectIsOpeningSidebar = (state : RootState) => state.recruiter.isOpeningSidebar




