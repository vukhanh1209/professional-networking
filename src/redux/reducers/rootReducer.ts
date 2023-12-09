import { combineReducers } from "@reduxjs/toolkit";

import employee from "./employeeSlice";
import company from './companySlice'
import job from './jobSlice'
import candidate from './candidateSlice'
import search from "./searchSlice"
import postedJob from "./postedJobSlice"

const rootReducer = combineReducers({
  employee,
  company,
  job,
  candidate,
  search,
  postedJob
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
