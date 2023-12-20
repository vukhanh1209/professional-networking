import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "./rootReducer";
import { ApplicationResponse } from "@/types/recruiter.type";
import { recruiterApplicationById, recruiterGetProfile } from "../actions/recruiter.action";


export type RecruiterProfile = {
    companyId: number;
    companyName : string;
    companyLogo: string;
    companyType : string;
    address : string;
    description : string;
    website : string;
    phoneNumber : string;
    industry : string;
    createdDate : string;
    minCompanySize: number;    
    maxCompanySize: number;
    overtimePolicy: string;
    countJobOpenings: number;
    workingFrom: string;
    workingTo: string;
    country: string;
    foundedDate: string;
    companyKeySkill: any[];
}

const initProfile = {
    companyId: -1,
    companyName : '',
    companyLogo: '',
    companyType : '',
    address : '',
    description : '',
    website : '',
    phoneNumber : '',
    industry : '',
    createdDate : '',
    countJobOpenings: 0,
    minCompanySize: 0,    
    maxCompanySize: 0,
    overtimePolicy: '',
    workingFrom: '',
    workingTo: '',
    country: '',
    foundedDate: '',
    companyKeySkill: []
}

const initialState = {
    isOpeningSidebar: false,
    applicationData: {} as ApplicationResponse,
    profile: initProfile as RecruiterProfile
}

const recruiterSlice = createSlice({
    name: 'recruiter',
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
        }),
        builder.addCase(recruiterGetProfile.fulfilled, (state, action : any) => {
            state.profile = action.payload
        })
    },
})
export default recruiterSlice.reducer;

export const {
    onDisplaySidebar
} = recruiterSlice.actions

export const selectIsOpeningSidebar = (state : RootState) => state.recruiter.isOpeningSidebar
export const selectApplicationData = (state : RootState) => state.recruiter.applicationData
export const selectRecruiterProfile = (state : RootState) => state.recruiter.profile





