// ? {-1,1 } | {0,1}  | {1,1}

// ? {-1, 0} |  {X}   | {1,0}

// ? {-1,-1} | {0,-1} | {1,-1}

const w = gridSquared; // * 25
const h = gridSquared; // * 25

    if (x < 0 || x >= w || y < 0 || y >= h) {
        // Out of bounds
        return null;
    }

    // Compute index within the array
    const index = (w * y + x) * 4;


// * Function to foreach through the array of cells
// *    Checks each of the cells neighbors
// *        If cell is alive:
// *            if neighbors < 2 || neighbors > 3:
// *                add cell's index to dead stack
// *        else: (Cell is dead)
// *            if neighbors == 3:
// *                add cell's index to live stack
// *
// *
// *
// *
// *
// *
// *
// *