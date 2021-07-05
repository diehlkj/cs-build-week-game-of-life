export const UPDATE_GRIDSIZE = "UPDATE_GRIDSIZE";
export const UPDATE_SPEED = "UPDATE_SPEED";
export const UPDATE_LIVE_COLOR = "UPDATE_LIVE_COLOR";
export const UPDATE_DEAD_COLOR = "UPDATE_DEAD_COLOR";
export const UPDATE_GRID_INSTANCE = "UPDATE_GRID_INSTANCE";

export const setGridSize = (GridSize) => (dispatch) => {
  dispatch({ type: UPDATE_GRIDSIZE, size: GridSize });
};
export const setSpeed = (Speed) => (dispatch) => {
  // console.log("In ACTION: ",Speed);
  dispatch({ type: UPDATE_SPEED, speed: Speed });
};
export const setLiveColor = (LiveColor) => (dispatch) => {
  dispatch({ type: UPDATE_LIVE_COLOR, color: LiveColor });
};
export const setDeadColor = (DeadColor) => (dispatch) => {
  dispatch({ type: UPDATE_DEAD_COLOR, color: DeadColor });
};
export const setGridInstance = (Grid) => (dispatch) => {
  dispatch({ type: UPDATE_GRID_INSTANCE, grid: Grid });
};
