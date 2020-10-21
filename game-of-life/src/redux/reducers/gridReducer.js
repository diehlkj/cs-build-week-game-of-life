export const initialGridState = {
    gridSquared: 100, // ? Number of collumns and rows
    gridResolution: 1000, // ? width & height in pixels of grid container
    // ? cell size is gridResolution / gridSquared
    iterationTime: 1, // ? Measured in milliseconds
};

export const gridReducer = (state = initialGridState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};