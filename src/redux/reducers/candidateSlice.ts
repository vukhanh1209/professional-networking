import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "./rootReducer";
import { searchByKeyword } from "../actions";


const initialState = {
    isOpeningInfoForm: false,
    isOpeningIntroForm: false,
    isOpeningEduForm: false,
    isOpeningSkillsForm: false,
}

const candidateSlice = createSlice({
    name: 'candidate',
    initialState: initialState,
    reducers: {
        openInfoForm: (state) => {
            state.isOpeningInfoForm = true;
        },
        closeInfoForm: (state) => {
            state.isOpeningInfoForm = false;
        },
        openIntroForm: (state) => {
            state.isOpeningIntroForm = true;
        },
        closeIntroForm: (state) => {
            state.isOpeningIntroForm = false;
        },
        openEduForm: (state) => {
            state.isOpeningEduForm = true;
        },
        closeEduForm: (state) => {
            state.isOpeningEduForm = false;
        },
        openSkillsForm: (state) => {
            state.isOpeningSkillsForm = true;
        },
        closeSkillsForm: (state) => {
            state.isOpeningSkillsForm = false;
        },
    },
    extraReducers: (builder) => {
      builder.addCase(searchByKeyword.fulfilled, (state, action : any) => {
     
        
      });
    },
})
export default candidateSlice.reducer;

export const {openInfoForm, closeInfoForm, openIntroForm, closeIntroForm, openEduForm, closeEduForm, openSkillsForm, closeSkillsForm} = candidateSlice.actions

export const selectIsOpeningInfoForm = (state : RootState) => state.candidate.isOpeningInfoForm
export const selectIsOpeningIntroForm = (state : RootState) => state.candidate.isOpeningIntroForm
export const selectIsOpeningEduForm = (state : RootState) => state.candidate.isOpeningEduForm
export const selectIsOpeningSkillsForm = (state : RootState) => state.candidate.isOpeningSkillsForm

