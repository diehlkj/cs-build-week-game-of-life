import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
// import { useAnimeFrame } from "utils/useAnimeFrame";
// import moment from "moment";

// ? Icon Imports
import { ReactComponent as Play } from "assets/icons/icon_play.svg";
import { ReactComponent as Pause } from "assets/icons/icon_pause.svg";
import { ReactComponent as NextGen } from "assets/icons/icon_next-gen.svg";
import { ReactComponent as ClearGrid } from "assets/icons/icon_clear-grid.svg";
import { ReactComponent as Info } from "assets/icons/icon_info.svg";
import { ReactComponent as GridScale } from "assets/icons/icon_grid-scale.svg";
import { ReactComponent as IterationSpeed } from "assets/icons/icon_iteration-speed.svg";
import { ReactComponent as Presets } from "assets/icons/icon_presets.svg";
import { ReactComponent as RandomGrid } from "assets/icons/icon_random-grid.svg";

const SimControls = ({ gridSquared, iterationTime, liveColor, deadColor }) => {
  const [play, setPlay] = useState(false);
  const [timeOutID, setTimeOutID] = useState(undefined);
  // const iterationTime = 17;

  const [grid, setGrid] = useState();

  // ? Captures the generated grid
  useEffect(() => {
    setGrid(document.querySelectorAll(".game-cell"));
    // console.log(grid);
  }, []);

  // ? Function that will handle comparison and redrawing of grid
  // ? This is handled by an iteration timer to automatically generate the next grid generation
  // ? Or can be called manually to iterate a single generation
  const interateGeneration = () => {
    const deadStack = [];
    const liveStack = [];
    console.log("FUCK");
    // *    tl       tn       tr
    // ? {-1,1 } | {0,1}  | {1,1}
    // *    ml       mn       mr
    // ? {-1, 0} |  {X}   | {1,0}
    // *    bl       bm       br
    // ? {-1,-1} | {0,-1} | {1,-1}

    // * Function to foreach through the array of cells
    // *    Checks each of the cells neighbors
    for (let i = 0; i < grid.length; i++) {
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

      if (tl >= 0 && tl < grid.length) {
        // ? [i - Grid width + 1]
        // ! -DEBUG-
        // ! console.log("tl",tl);
        if (grid[tl].style.backgroundColor === liveColor) {
          neighbors++;
        }
      }
      if (tm >= 0 && tm < grid.length) {
        // ? [i - Grid width]
        // ! -DEBUG-
        // ! console.log("tm",tm);
        if (grid[tm].style.backgroundColor === liveColor) {
          neighbors++;
        }
      }
      if (tr >= 0 && tr < grid.length) {
        // ? [i - Grid width - 1]
        // ! -DEBUG-
        // ! console.log("tr",tr);
        if (grid[tr].style.backgroundColor === liveColor) {
          neighbors++;
        }
      }
      if (ml >= 0 && ml < grid.length) {
        // ? [i - 1]
        // ! -DEBUG-
        // ! console.log("ml",ml);
        if (grid[ml].style.backgroundColor === liveColor) {
          neighbors++;
        }
      }
      if (mr >= 0 && mr < grid.length) {
        // ? [i + 1]
        // ! -DEBUG-
        // ! console.log("mr",mr);
        if (grid[mr].style.backgroundColor === liveColor) {
          neighbors++;
        }
      }
      if (bl >= 0 && bl < grid.length) {
        // ? [i + Grid width - 1]
        // ! -DEBUG-
        // ! console.log("bl",bl);
        if (grid[bl].style.backgroundColor === liveColor) {
          neighbors++;
        }
      }
      if (bm >= 0 && bm < grid.length) {
        // ? [i + Grid width]
        // ! -DEBUG-
        // ! console.log("bm",bm);
        if (grid[bm].style.backgroundColor === liveColor) {
          neighbors++;
        }
      }
      if (br >= 0 && br < grid.length) {
        // ? [i + Grid width + 1]
        // ! -DEBUG-
        // ! console.log("br",br);
        if (grid[br].style.backgroundColor === liveColor) {
          neighbors++;
        }
      }

      // * If cell is alive:
      if (grid[i].style.backgroundColor === liveColor) {
        // * if neighbors < 2 || neighbors > 3:
        if (neighbors < 2 || neighbors > 3) {
          // * add cell's index to dead stack
          deadStack.push(grid[i]);
        }
        // * else: (Cell is dead)
      } else {
        // * if neighbors == 3:
        if (neighbors === 3) {
          // * add cell's index to live stack
          liveStack.push(grid[i]);
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

  // ? Toggles simulation by creating and clearing intervals
  const toggleAnim = (e) => {
    e.preventDefault();
    if (play) {
      window.clearInterval(timeOutID);
      setTimeOutID(undefined);
    } else {
      setTimeOutID(window.setInterval(interateGeneration, iterationTime));
    }
    setPlay(!play);
  };

  // ? Clears the grid of all live cells
  const clearGrid = (e) => {
    e.preventDefault();
    grid.forEach((cell) => {
      cell.style.backgroundColor = deadColor;
    });
  };

  // ? Creates a random arrangement of live and dead cells
  const randomGrid = (e) => {
    e.preventDefault();
    console.log("liveColor: ", liveColor);
    console.log("deadColor: ", deadColor);

    grid.forEach((cell) => {
      let rndm = Math.round(Math.random());
      if (rndm === 1) {
        cell.style.backgroundColor = liveColor;
      } else {
        cell.style.backgroundColor = deadColor;
      }
    });
  };

  return (
    <div className="sim-controls">
      <div onClick={toggleAnim}>
        {play ? (
          <Pause className="icon-button" />
        ) : (
          <Play className="icon-button" />
        )}
      </div>

      <div onClick={interateGeneration}>
        <NextGen className="icon-button" />
      </div>

      <div onClick={clearGrid}>
        <ClearGrid className="icon-button" />
      </div>

      <div onClick={randomGrid}>
        <RandomGrid className="icon-button" />
      </div>

      <div>
        <IterationSpeed className="icon-button" />
      </div>

      <div>
        <GridScale className="icon-button" />
      </div>

      <div>
        <Presets className="icon-button" />
      </div>

      <div>
        <Info className="icon-button" />
      </div>

      {/* <input type="number"/> */}
      {/* <input type="range" min="33" max="1000" value="33" /> */}
    </div>
  );
};

const mapPropsToState = (state) => {
  return {
    gridSquared: state.gridReducer.gridSquared,
    iterationTime: state.gridReducer.iterationTime,
    liveColor: state.gridReducer.liveColor,
    deadColor: state.gridReducer.deadColor,
  };
};

export default connect(mapPropsToState, {})(SimControls);
// ? Play / Pause Simulation    (Button)
// ? Next Generation            (Button)
// ? Clear Grid                 (Button)
// ? Grid Size                  (Number Input)
// ? Simulation Speed           (Range Slider) [Ticks per Second] { Range from 33ms to 1000ms or ~30fps to 1fps }
