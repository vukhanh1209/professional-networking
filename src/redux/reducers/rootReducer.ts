import { combineReducers } from "@reduxjs/toolkit";

import employee from "./employeeSlice";
import company from './companySlice'
import job from './jobSlice'
const rootReducer = combineReducers({
  // alert,
  employee,
  company,
  job
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
