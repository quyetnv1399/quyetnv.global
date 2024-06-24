import { combineReducers } from "redux";
import employeeReducer from "./employee/reducer";

const rootReducer = combineReducers({
  employee: employeeReducer,
  // Add more reducers here if needed
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;