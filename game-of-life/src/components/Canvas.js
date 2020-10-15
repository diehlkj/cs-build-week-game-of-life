import React from "react";

const Canvas = () => {
  let canvas = document.getElementById("my-canvas");
  let ctx = canvas.getContext("2d");
  let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  let screenBuffer = imageData.data;

  return (
    <div>
      <h1>hello in canvas</h1>

      <canvas id="my-canvas"></canvas>
    </div>
  );
};

export default Canvas;
/**
 * Conways' Game of Life
 *
 * Every cell interacts with its eight neighbours, which are the
 * cells that are horizontally, vertically, or diagonally adjacent.
 *
 * At each step in time, the following transitions occur:
 *
 * 1. Any live cell with fewer than two live neighbours dies, as if caused by under-population.
 * 2. Any live cell with two or three live neighbours lives on to the next generation.
 * 3. Any live cell with more than three live neighbours dies, as if by over-population.
 * 4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
 *
 * The initial pattern constitutes the seed of the system. The first
 * generation is created by applying the above rules simultaneously to
 * every cell in the seed—births and deaths occur simultaneously, and
 * the discrete moment at which this happens is sometimes called a tick
 * (in other words, each generation is a pure function of the preceding one).
 */
