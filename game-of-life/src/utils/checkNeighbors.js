import React, { useState } from 'react';
import { useAnimeFrame } from "utils/useAnimeFrame";
import Moment from "moment";

const [ stopAnimation, setStopAnimation ] = useState(false);

const doAnimation = (elapsedTime) => {
  console.log("elapsed time:", elapsedTime);
  console.log(canvasRef.current);
};

const [ cancelAnimationFrame ] = useAnimeFrame(moment.now(), doAnimation);












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

const theCells = document.querySelectorAll(".game-cell");
const deadStack = [];
const liveStack = [];

// * Function to foreach through the array of cells
// *    Checks each of the cells neighbors
for (let i = 0; i < theCells.length; i++) {
  // *        If cell is alive:
  if (theCells[i].style.backgroundColor === "black") {
    // *            if neighbors < 2 || neighbors > 3:
    // *                add cell's index to dead stack
    deadStack.push(i);
    // *        else: (Cell is dead)
  } else {
    // *            if neighbors == 3:
    // *                add cell's index to live stack
    liveStack.push(i);
  }
}
// *
// *
// *
// *
// *
// *
// *
// *

deadStack.forEach((i) => {
  theCells[i].style.backgroundColor = "black";
});

liveStack.forEach((i) => {
  theCells[i].style.backgroundColor = "black";
});
