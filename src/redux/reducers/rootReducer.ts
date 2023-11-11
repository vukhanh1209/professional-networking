import { combineReducers } from "@reduxjs/toolkit";

import employee from "./employeeSlice";
import company from './companySlice'

const rootReducer = combineReducers({
  // alert,
  employee,
  company,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
