import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "./rootReducer";
import { recruiterGetPostedJob } from "../actions/recruiter.action";

const initialState = {
    postData : {} as any
}

const postedJobSlice = createSlice({
    name: 'postedJob',
    initialState: initialState,
    reducers: {

    },
    extraReducers: (builder) => {
      builder.addCase(recruiterGetPostedJob.fulfilled, (state, action : any) => {
        state.postData = action.payload
      })
    }
})

export default postedJobSlice.reducer;

// export const {

// } = postedJobSlice.actions

export const selectPostData = (state : RootState) => state.postedJob.postData





