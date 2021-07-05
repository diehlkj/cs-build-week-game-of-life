import { combineReducers } from "redux";

import { gridReducer } from "./gridReducer";

export const rootReducer = combineReducers({
  gridReducer,
});
