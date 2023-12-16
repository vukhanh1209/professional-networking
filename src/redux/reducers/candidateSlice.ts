import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "./rootReducer";
import { getCandidateCV, getProfile} from "../actions";

type EducationType = {
    id : number;
    major : string;
    school : string;
    startDate : string;
    endDate : string;
}

type CVType = {
    linkCv: string;
    coverLetter: string;
}

type ProfileType = {
    id : number;
    aboutMe : string;
    fullName : string;
    email : string;
    address: string;
    position : string;
    phoneNumber : string;
    birthdate : string;
    linkWebsiteProfile : string;
    skills : any
    city : string;
    gender : string;
    education : EducationType;
    experience : any;
    avatar : string;
    userStatus : string;
}


const initialState = {
    isOpeningInfoForm: false,
    isOpeningIntroForm: false,
    isOpeningEduForm: false,
    isOpeningSkillsForm: false,
    profile: {} as ProfileType,
    cv : {} as CVType 
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
        updateEducation : (state, action) => {
            const newProfile = {
                ...state.profile,
                education: action.payload
            }
            state.profile = newProfile
        },
        updateIntroduction : (state, action) => {
            const newIntroduction = {
                ...state.profile,
                aboutMe: action.payload
            }
            state.profile = newIntroduction
        },
        updateInfo : (state, action) => {
            const newInfo = {
                ...state.profile,
                ...action.payload
            }
            state.profile = newInfo
        }
    },
    extraReducers: (builder) => {
      builder.addCase(getCandidateCV.fulfilled, (state, action : any) => {
        state.cv = action.payload
      }),
      builder.addCase(getProfile.fulfilled, (state, action : any) => {
        state.profile = action.payload
      })
    },
})
export default candidateSlice.reducer;

export const {
    openInfoForm, 
    closeInfoForm, 
    openIntroForm, 
    closeIntroForm, 
    openEduForm, 
    closeEduForm, 
    openSkillsForm, 
    closeSkillsForm,
    updateEducation,
    updateInfo,
    updateIntroduction
} = candidateSlice.actions

export const selectIsOpeningInfoForm = (state : RootState) => state.candidate.isOpeningInfoForm
export const selectIsOpeningIntroForm = (state : RootState) => state.candidate.isOpeningIntroForm
export const selectIsOpeningEduForm = (state : RootState) => state.candidate.isOpeningEduForm
export const selectIsOpeningSkillsForm = (state : RootState) => state.candidate.isOpeningSkillsForm
export const selectCV = (state : RootState) => state.candidate.cv
export const selectProfile = (state : RootState) => state.candidate.profile
export const selectIntroduction = (state : RootState) => state.candidate.profile.aboutMe
export const selectEducation = (state : RootState) => state.candidate.profile.education
export const selectExperience = (state : RootState) => state.candidate.profile.experience
export const selectSkills = (state : RootState) => state.candidate.profile.skills




