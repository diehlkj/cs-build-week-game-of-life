import React, { useState, useEffect } from "react";

// ? Icon Imports
import { ReactComponent as Play } from "assets/icons/icon_play.svg";
import { ReactComponent as Pause } from "assets/icons/icon_pause.svg";
import { ReactComponent as NextGen } from "assets/icons/icon_next-gen.svg";
import { ReactComponent as ClearGrid } from "assets/icons/icon_clear-grid.svg";
import { ReactComponent as Settings } from "assets/icons/icon_settings.svg";
import { ReactComponent as Info } from "assets/icons/icon_info.svg";

export default function SimControls() {
  const [play, setPlay] = useState(false);
  const theCells = document.querySelectorAll(".game-cell");
  useEffect(() => {
    const toChange = [];

    const theCells = document.querySelectorAll(".game-cell");

    if (play) {
      toChange.forEach((i) => {
        theCells[i].style.backgroundColor = "black";
      });

      setPlay(false);
      // ? -vvv- looping animation test -vvv-
      //   let count = 0;
      //   const cells = document.querySelectorAll(".game-cell");

      //   let theLoop = () => {
      //     setTimeout(() => {
      //       if (count === 0) {
      //         cells[count].style.backgroundColor = "black";
      //       } else {
      //         cells[count - 1].style.backgroundColor = "white";
      //         cells[count].style.backgroundColor = "black";
      //       }

      //       count++;

      //       if (count === 625) {
      //         setPlay(false);
      //         // cells[count - 1].style.backgroundColor = "white";
      //       } else {
      //         theLoop();
      //       }
      //     }, 5);

      //     console.log(count);
      //   };

      //   theLoop();
    }
  }, [play]);

  const clearGrid = (e) => {
    e.preventDefault();
    theCells.forEach((cell) => {
        cell.style.backgroundColor = "white";
    });
  }
  return (
    <div className="sim-controls">
      <div onClick={() => setPlay(!play)}>{play ? <Pause /> : <Play />}</div>
      <div>
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
