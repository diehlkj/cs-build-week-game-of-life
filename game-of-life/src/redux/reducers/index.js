import { combineReducers } from "redux";

import { canvasReducer } from "redux/reducers/canvasReducer";

export const rootReducer = combineReducers({
  canvasReducer,
});
