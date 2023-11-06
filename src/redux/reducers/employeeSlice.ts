import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { authSignIn } from "../actions/auth.actions";
import { RootState } from "./rootReducer";

type EmployeeInfo = {
  username: string;
  firstname: string | null;
  lastname: string | null;
}

const initialState = {
    employeeInfo : {} as EmployeeInfo,
}

const employeeSlice = createSlice({
    name: 'employee',
    initialState: initialState,
    reducers: {
      openModalNFT(state, action: PayloadAction<any>) {
        // state.isOpenModal = true
      },
  
      closeModalNFT(state, action) {
        // state.isOpenModal = false
      },
    },
    extraReducers: (builder) => {
      builder.addCase(authSignIn.fulfilled, (state, action) => {
        state.employeeInfo.username = action.payload.username;
        state.employeeInfo.firstname = action.payload.firstName;
        state.employeeInfo.lastname = action.payload.lastName;
      });
    },
  })
export const {openModalNFT,closeModalNFT} = employeeSlice.actions;
export default employeeSlice.reducer;

export const selectEmployeeInfo = (state : RootState) => state.employee.employeeInfo ;
