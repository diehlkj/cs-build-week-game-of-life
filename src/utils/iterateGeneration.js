import { store } from "App";

// ? Function that will handle comparison and redrawing of grid
// ? This is handled by an iteration timer to automatically generate the next grid generation
// ? Or can be called manually to iterate a single generation
export const iterateGeneration = (gridInstance, gridSquared, liveColor, deadColor) => {
  const deadStack = [];
  const liveStack = [];

  // *    tl       tn       tr
  // ? {-1,1 } | {0,1}  | {1,1}
  // *    ml       mn       mr
  // ? {-1, 0} |  {X}   | {1,0}
  // *    bl       bm       br
  // ? {-1,-1} | {0,-1} | {1,-1}

  // * Function to foreach through the array of cells
  // *    Checks each of the cells neighbors
  for (let i = 0; i < gridInstance.length; i++) {
    let neighbors = 0;

    let tl = i - gridSquared + 1; // ? [i - Grid width + 1]
    let tm = i - gridSquared; // ? [i - Grid width]
    let tr = i - gridSquared - 1; // ? [i - Grid width - 1]

    let ml = i - 1; // ? [i - 1]
    // let mm = i; // ? the one were checking
    let mr = i + 1; // ? [i + 1]

    let bl = i + gridSquared - 1; // ? [i + Grid width - 1]
    let bm = i + gridSquared; // ? [i + Grid width]
    let br = i + gridSquared + 1; // ? [i + Grid width + 1]

    if (tl >= 0 && tl < gridInstance.length) {
      // ? [i - Grid width + 1]
      // ! -DEBUG-
      // ! console.log("tl",tl);
      if (gridInstance[tl].style.backgroundColor === liveColor) {
        neighbors++;
      }
    }
    if (tm >= 0 && tm < gridInstance.length) {
      // ? [i - Grid width]
      // ! -DEBUG-
      // ! console.log("tm",tm);
      if (gridInstance[tm].style.backgroundColor === liveColor) {
        neighbors++;
      }
    }
    if (tr >= 0 && tr < gridInstance.length) {
      // ? [i - Grid width - 1]
      // ! -DEBUG-
      // ! console.log("tr",tr);
      if (gridInstance[tr].style.backgroundColor === liveColor) {
        neighbors++;
      }
    }
    if (ml >= 0 && ml < gridInstance.length) {
      // ? [i - 1]
      // ! -DEBUG-
      // ! console.log("ml",ml);
      if (gridInstance[ml].style.backgroundColor === liveColor) {
        neighbors++;
      }
    }
    if (mr >= 0 && mr < gridInstance.length) {
      // ? [i + 1]
      // ! -DEBUG-
      // ! console.log("mr",mr);
      if (gridInstance[mr].style.backgroundColor === liveColor) {
        neighbors++;
      }
    }
    if (bl >= 0 && bl < gridInstance.length) {
      // ? [i + Grid width - 1]
      // ! -DEBUG-
      // ! console.log("bl",bl);
      if (gridInstance[bl].style.backgroundColor === liveColor) {
        neighbors++;
      }
    }
    if (bm >= 0 && bm < gridInstance.length) {
      // ? [i + Grid width]
      // ! -DEBUG-
      // console.log("bm",bm);

      // console.log("type of bm",typeof bm);

      if (gridInstance[bm].style.backgroundColor === liveColor) {
        neighbors++;
      }
    }
    if (br >= 0 && br < gridInstance.length) {
      // ? [i + Grid width + 1]
      // ! -DEBUG-
      // ! console.log("br",br);
      if (gridInstance[br].style.backgroundColor === liveColor) {
        neighbors++;
      }
    }

    // * If cell is alive:
    if (gridInstance[i].style.backgroundColor === liveColor) {
      // * if neighbors < 2 || neighbors > 3:
      if (neighbors < 2 || neighbors > 3) {
        // * add cell's index to dead stack
        deadStack.push(gridInstance[i]);
      }
      // * else: (Cell is dead)
    } else {
      // * if neighbors == 3:
      if (neighbors === 3) {
        // * add cell's index to live stack
        liveStack.push(gridInstance[i]);
      }
    }
  }

  // * Sets new dead cells
  deadStack.forEach((i) => {
    i.style.backgroundColor = deadColor;
  });

  // * Sets new live cells
  liveStack.forEach((i) => {
    i.style.backgroundColor = liveColor;
  });
};