import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
// import { useAnimeFrame } from "utils/useAnimeFrame";
// import moment from "moment";

// ? Icon Imports
import { ReactComponent as Play } from "assets/icons/icon_play.svg";
import { ReactComponent as Pause } from "assets/icons/icon_pause.svg";
import { ReactComponent as NextGen } from "assets/icons/icon_next-gen.svg";
import { ReactComponent as ClearGrid } from "assets/icons/icon_clear-grid.svg";
import { ReactComponent as Settings } from "assets/icons/icon_settings.svg";
import { ReactComponent as Info } from "assets/icons/icon_info.svg";

const SimControls = ({ gridSquared, gridResolution }) => {
  const [play, setPlay] = useState(false);
  const [timeOutID, setTimeOutID] = useState(undefined);
  const iterationTime = 1000;

  const [theCells, setTheCells] = useState();

  useEffect(() => {
    setTheCells(document.querySelectorAll(".game-cell"));
    console.log(theCells);
  }, []);
  // let count = 0;

  // ? Function that will handle comparison and redrawing of grid
  const interateGeneration = () => {
    console.log("I iterated!");
    const theCells = document.querySelectorAll(".game-cell");
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
    for (let i = 0; i < theCells.length; i++) {
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

      if (tl >= 0 && tl < theCells.length) {
        // ? [i - Grid width + 1]
        // console.log("tl",tl);
        if (theCells[tl].style.backgroundColor === "black") {
          neighbors++;
        }
      }
      if (tm >= 0 && tm < theCells.length) {
        // ? [i - Grid width]
        // console.log("tm",tm);
        if (theCells[tm].style.backgroundColor === "black") {
          neighbors++;
        }
      }
      if (tr >= 0 && tr < theCells.length) {
        // ? [i - Grid width - 1]
        // console.log("tr",tr);
        if (theCells[tr].style.backgroundColor === "black") {
          neighbors++;
        }
      }
      if (ml >= 0 && ml < theCells.length) {
        // ? [i - 1]
        // console.log("ml",ml);
        if (theCells[ml].style.backgroundColor === "black") {
          neighbors++;
        }
      }
      if (mr >= 0 && mr < theCells.length) {
        // ? [i + 1]
        // console.log("mr",mr);
        if (theCells[mr].style.backgroundColor === "black") {
          neighbors++;
        }
      }
      if (bl >= 0 && bl < theCells.length) {
        // ? [i + Grid width - 1]
        // console.log("bl",bl);
        if (theCells[bl].style.backgroundColor === "black") {
          neighbors++;
        }
      }
      if (bm >= 0 && bm < theCells.length) {
        // ? [i + Grid width]
        // console.log("bm",bm);
        if (theCells[bm].style.backgroundColor === "black") {
          neighbors++;
        }
      }
      if (br >= 0 && br < theCells.length) {
        // ? [i + Grid width + 1]
        // console.log("br",br);
        if (theCells[br].style.backgroundColor === "black") {
          neighbors++;
        }
      }

      // * If cell is alive:
      if (theCells[i].style.backgroundColor === "black") {
        // * if neighbors < 2 || neighbors > 3:
        if (neighbors < 2 || neighbors > 3) {
          // * add cell's index to dead stack
          deadStack.push(theCells[i]);
        }
        // * else: (Cell is dead)
      } else {
        // * if neighbors == 3:
        if (neighbors == 3) {
          // * add cell's index to live stack
          liveStack.push(theCells[i]);
        }
      }
    }

    // * Sets new dead cells
    deadStack.forEach((i) => {
      i.style.backgroundColor = "white";
    });

    // * Sets new live cells
    liveStack.forEach((i) => {
      i.style.backgroundColor = "black";
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

  // useEffect(() => {
  //   const toChange = [];

  //   const theCells = document.querySelectorAll(".game-cell");

  //   if (play) {
  //     toChange.forEach((i) => {
  //       theCells[i].style.backgroundColor = "black";
  //     });

  //     setPlay(false);
  //     // ? -vvv- looping animation test -vvv-
  //     //   let count = 0;
  //     //   const cells = document.querySelectorAll(".game-cell");

  //     //   let theLoop = () => {
  //     //     setTimeout(() => {
  //     //       if (count === 0) {
  //     //         cells[count].style.backgroundColor = "black";
  //     //       } else {
  //     //         cells[count - 1].style.backgroundColor = "white";
  //     //         cells[count].style.backgroundColor = "black";
  //     //       }

  //     //       count++;

  //     //       if (count === 625) {
  //     //         setPlay(false);
  //     //         // cells[count - 1].style.backgroundColor = "white";
  //     //       } else {
  //     //         theLoop();
  //     //       }
  //     //     }, 5);

  //     //     console.log(count);
  //     //   };

  //     //   theLoop();
  //   }
  // }, [play]);

  const clearGrid = (e) => {
    e.preventDefault();
    const theCells = document.querySelectorAll(".game-cell");
    theCells.forEach((cell) => {
      cell.style.backgroundColor = "white";
    });
  };

  return (
    <div className="sim-controls">
      <div onClick={toggleAnim}>{play ? <Pause /> : <Play />}</div>
      <div onClick={interateGeneration}>
        <NextGen />
      </div>
      <div onClick={clearGrid}>
        <ClearGrid />
      </div>
      <div>
        <Settings />
      </div>
      <div>
        <Info />
      </div>
      {/* <input type="number"/> */}
      {/* <input type="range" min="1" max="100" value="25" /> */}
    </div>
  );
};

const mapPropsToState = (state) => {
  return {
    gridSquared: state.gridReducer.gridSquared,
    gridResolution: state.gridReducer.gridResolution,
  };
};

export default connect(mapPropsToState, {})(SimControls);
// ? Play / Pause Simulation    (Button)
// ? Next Generation            (Button)
// ? Clear Grid                 (Button)
// ? Grid Size                  (Number Input)
// ? Simulation Speed           (Range Slider) [Ticks per Second]
