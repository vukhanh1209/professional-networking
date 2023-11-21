import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { authSignIn } from "../actions/auth.action";
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

    },
    extraReducers: (builder) => {
      builder.addCase(authSignIn.fulfilled, (state, action) => {
        state.employeeInfo.username = action.payload.username;
        state.employeeInfo.firstname = action.payload.firstName;
        state.employeeInfo.lastname = action.payload.lastName;
      });
    },
  })
export default employeeSlice.reducer;

export const selectEmployeeInfo = (state : RootState) => state.employee.employeeInfo ;
