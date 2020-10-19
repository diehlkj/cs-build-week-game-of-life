export const initialGridState = {
    gridSquared: 25, // ? Number of collumns and rows
    gridResolution: 1000, // ? width & height in pixels of grid container
    // ? cell size is gridResolution / gridSquared
};

export const gridReducer = (state = initialGridState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};