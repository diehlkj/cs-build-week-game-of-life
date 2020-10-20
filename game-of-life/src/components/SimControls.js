import React, { useState, useEffect } from "react";
// import { useAnimeFrame } from "utils/useAnimeFrame";
// import moment from "moment";

// ? Icon Imports
import { ReactComponent as Play } from "assets/icons/icon_play.svg";
import { ReactComponent as Pause } from "assets/icons/icon_pause.svg";
import { ReactComponent as NextGen } from "assets/icons/icon_next-gen.svg";
import { ReactComponent as ClearGrid } from "assets/icons/icon_clear-grid.svg";
import { ReactComponent as Settings } from "assets/icons/icon_settings.svg";
import { ReactComponent as Info } from "assets/icons/icon_info.svg";

export default function SimControls() {
  const [play, setPlay] = useState(false);
  const [timeOutID, setTimeOutID] = useState(undefined);
  const iterationTime = 1000;
  
  const [theCells, setTheCells] = useState();

  useEffect(() => {
    setTheCells(document.querySelectorAll(".game-cell"));
    console.log(theCells);
  },[]);
  let count = 0;

  // ? Function that will handle comparison and redrawing of grid
  const interateGeneration = () => {
    theCells[count].style.backgroundColor = "black";
    count++;
    console.log(
      "I iterated a generation!!! I will iterate again in (ms): ",
      iterationTime
    );
    console.log(
      "Count: ",
      count
    );
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
}

// ? Play / Pause Simulation    (Button)
// ? Next Generation            (Button)
// ? Clear Grid                 (Button)
// ? Grid Size                  (Number Input)
// ? Simulation Speed           (Range Slider) [Ticks per Second]
