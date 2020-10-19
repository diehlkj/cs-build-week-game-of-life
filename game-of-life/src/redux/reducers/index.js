import { combineReducers } from "redux";

import { gridReducer } from "redux/reducers/gridReducer";

export const rootReducer = combineReducers({
  gridReducer,
});
