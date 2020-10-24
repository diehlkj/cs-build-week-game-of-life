import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
// import { useAnimeFrame } from "utils/useAnimeFrame";
// import moment from "moment";
import {
  setGridSize,
  setSpeed,
  setLiveColor,
  setDeadColor,
} from "redux/actions";

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

const SimControls = ({
  gridSquared,
  iterationTime,
  liveColor,
  deadColor,
  setGridSize,
  setSpeed,
  setLiveColor,
  setDeadColor,
  gridInstance,
}) => {
  const [play, setPlay] = useState(false);
  const [timeOutID, setTimeOutID] = useState(undefined);
  const [speedToggle, setSpeedToggle] = useState(false);
  const [infoToggle, setInfoToggle] = useState(false);
  const [sizeToggle, setSizeToggle] = useState(false);
  const [presetToggle, setPresetToggle] = useState(false);

  // ? Captures the generated grid

  // ? Function that will handle comparison and redrawing of grid
  // ? This is handled by an iteration timer to automatically generate the next grid generation
  // ? Or can be called manually to iterate a single generation
  const interateGeneration = () => {
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

  // ? Toggles simulation by creating and clearing intervals
  const toggleAnim = () => {
    if (play) {
      window.clearInterval(timeOutID);
      setTimeOutID(undefined);
    } else {
      setTimeOutID(window.setInterval(interateGeneration, iterationTime));
    }
    setPlay(!play);
  };

  // ? Clears the grid of all live cells
  const clearGrid = () => {
    gridInstance.forEach((cell) => {
      cell.style.backgroundColor = deadColor;
    });
  };

  // ? Creates a random arrangement of live and dead cells
  const randomGrid = () => {

    gridInstance.forEach((cell) => {
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
      <div id="icon-button" className="button-container" onClick={toggleAnim}>
        {play ? (
          <Pause className="icon-button" />
        ) : (
          <Play className="icon-button" />
        )}
      </div>

      <div
        id="icon-button"
        className="button-container"
        onClick={() => {
          if (!play) {
            interateGeneration();
          }
        }}
        style={!play ? { opacity: "1" } : { opacity: "0.5" }}
      >
        <NextGen className="icon-button" />
      </div>

      <div
        id="icon-button"
        className="button-container"
        onClick={() => {
          if (!play) {
            clearGrid();
          }
        }}
        style={!play ? { opacity: "1" } : { opacity: "0.5" }}
      >
        <ClearGrid className="icon-button" />
      </div>

      <div
        id="icon-button"
        className="button-container"
        onClick={() => {
          if (!play) {
            randomGrid();
          }
        }}
        style={!play ? { opacity: "1" } : { opacity: "0.5" }}
      >
        <RandomGrid className="icon-button" />
      </div>

      <div
        className="button-container"
        style={!play ? { opacity: "1" } : { opacity: "0.5" }}
      >
        <IterationSpeed
          onClick={() => {
            if (!play) {
              setSpeedToggle(!speedToggle);
            }
          }}
          className="icon-button"
          style={
            !speedToggle
              ? { transform: "scale(1)" }
              : { transform: "scale(0.85)" }
          }
        />
        {speedToggle ? (
          <div className="setting-popup">
            <label>Iteration Speed</label>
            <input
              className="iteration-slider"
              type="range"
              min="33"
              max="1000"
              value={iterationTime}
              onChange={(e) => setSpeed(e.target.value)}
            />
            <div className="triangle"></div>
          </div>
        ) : (
          <></>
        )}
      </div>

      <div
        className="button-container"
        style={!play ? { opacity: "1" } : { opacity: "0.5" }}
      >
        <GridScale
          onClick={() => {
            if (!play) {
              setSizeToggle(!sizeToggle);
            }
          }}
          className="icon-button"
          style={
            !sizeToggle
              ? { transform: "scale(1)" }
              : { transform: "scale(0.85)" }
          }
        />
        {sizeToggle ? (
          <div className="setting-popup">
            <label>Grid Size</label>
            <input
              className="size-input"
              type="number"
              min="10"
              max="100"
              value={gridSquared}
              onChange={(e) => setGridSize(Number(e.target.value))}
            />
            <div className="triangle"></div>
          </div>
        ) : (
          <></>
        )}
      </div>

      <div
        className="button-container"
        style={!play ? { opacity: "1" } : { opacity: "0.5" }}
      >
        <Presets
          onClick={() => {
            if (!play) {
              setPresetToggle(!presetToggle);
            }
          }}
          className="icon-button"
          style={
            !presetToggle
              ? { transform: "scale(1)" }
              : { transform: "scale(0.85)" }
          }
        />
        {presetToggle ? (
          <div className="setting-popup">
            <input className="preset-select" type="range" min="33" max="1000" />
            <div className="triangle"></div>
          </div>
        ) : (
          <></>
        )}
      </div>

      <div id="icon-button" className="button-container">
        <Info className="icon-button" />
      </div>
    </div>
  );
};

const mapPropsToState = (state) => {
  return {
    gridSquared: state.gridReducer.gridSquared,
    iterationTime: state.gridReducer.iterationTime,
    liveColor: state.gridReducer.liveColor,
    deadColor: state.gridReducer.deadColor,
    gridInstance: state.gridReducer.gridInstance,
  };
};

export default connect(mapPropsToState, {
  setGridSize,
  setSpeed,
  setLiveColor,
  setDeadColor,
})(SimControls);
// ? Play / Pause Simulation    (Button)
// ? Next Generation            (Button)
// ? Clear Grid                 (Button)
// ? Grid Size                  (Number Input)
// ? Simulation Speed           (Range Slider) [Ticks per Second] { Range from 33ms to 1000ms or ~30fps to 1fps }
