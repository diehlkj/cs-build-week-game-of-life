export const initialGridState = {
    gridSquared: 100, // ? Number of collumns and rows
    gridResolution: 1000, // ? width & height in pixels of grid container
    // ? cell size is gridResolution / gridSquared
    iterationTime: 100, // ? Measured in milliseconds
    liveColor: "rgb(45, 45, 45)",
    deadColor: "rgb(248, 247, 242)",
};

export const gridReducer = (state = initialGridState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};