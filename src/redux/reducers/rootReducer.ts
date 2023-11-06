import { combineReducers } from "@reduxjs/toolkit";

import employee from "./employeeSlice";


const rootReducer = combineReducers({
  // alert,
  employee,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
