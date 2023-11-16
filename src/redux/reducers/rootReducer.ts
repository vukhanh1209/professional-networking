import { combineReducers } from "@reduxjs/toolkit";

import employee from "./employeeSlice";
import company from './companySlice'
import job from './jobSlice'
import candidate from './candidateSlice'

const rootReducer = combineReducers({
  // alert,
  employee,
  company,
  job,
  candidate
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
