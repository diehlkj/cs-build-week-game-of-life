import {
  UPDATE_GRIDSIZE,
  UPDATE_SPEED,
  UPDATE_LIVE_COLOR,
  UPDATE_DEAD_COLOR,
  UPDATE_GRID_INSTANCE,
} from "redux/actions";

export const initialGridState = {
  gridSquared: 25, // ? Number of collumns and rows
  gridResolution: 1000, // ? width & height in pixels of grid container
  // ? cell size is gridResolution / gridSquared
  iterationTime: 100, // ? Measured in milliseconds
  liveColor: "rgb(45, 45, 45)",
  deadColor: "rgb(248, 247, 242)",
  gridInstance: [],
};

export const gridReducer = (state = initialGridState, action) => {
  switch (action.type) {
    case UPDATE_SPEED:
      return {
        ...state,
        iterationTime: action.speed,
      };
    case UPDATE_GRIDSIZE:
      return {
        ...state,
        gridSquared: action.size,
      };
    case UPDATE_GRID_INSTANCE:
      return {
        ...state,
        gridInstance: action.grid,
      };

    default:
      return state;
  }
};
