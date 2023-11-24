import { combineReducers } from "@reduxjs/toolkit";

import employee from "./employeeSlice";
import company from './companySlice'
import job from './jobSlice'
import candidate from './candidateSlice'
import search from "./searchSlice"

const rootReducer = combineReducers({
  // alert,
  employee,
  company,
  job,
  candidate,
  search
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
