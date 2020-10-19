import React, { useRef, useState, useEffect } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { useAnimeFrame } from "utils/useAnimeFrame";

const Canvas = ({ canvasWidth, canvasHeight }) => {
  //   function getPixel(imageData, x, y) {
  //     const w = imageData.width; // Conveniently the width is here
  //     const h = imageData.height;

  //     if (x < 0 || x >= w || y < 0 || y >= h) {
  //       // Out of bounds
  //       return null;
  //     }

  //     // Compute index within the array
  //     const index = (w * y + x) * 4;

  //     // Return a copy of the R, G, B, and A elements
  //     return imageData.data.slice(index, index + 4);
  //   }

  //   const canvas = document.querySelector("#my-canvas");
  //   const ctx = canvas.getContext("2d");
  //   const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  //   const pixelRGBA = getPixel(imageData, 10, 10);

  //   console.log(pixelRGBA);
  //   ctx.putImageData(imageData, 0, 0);

  const canvasRef = useRef(null);
  // ? vvv-vvv
  // const [stopAnimation, setStopAnimation] = useState(false);

  // const doAnimation = (elapsedTime) => {
  //   console.log("elapsed time:", elapsedTime);
  //   console.log(canvasRef.current);
  // };

  // const [cancelAnimationFrame] = useAnimeFrame(moment.now(), doAnimation);

  function getPixel(imageData, x, y) {
    const w = imageData.width; // Conveniently the width is here
    const h = imageData.height;

    if (x < 0 || x >= w || y < 0 || y >= h) {
      // Out of bounds
      return null;
    }

    // Compute index within the array
    const index = (w * y + x) * 4;

    // Return a copy of the R, G, B, and A elements
    return imageData.data.slice(index, index + 4);
  }

  // Example Usage
  useEffect(() => {
    const canvas = document.getElementById("my-canvas");
    
    const ctx = canvas.getContext("2d");

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    const pixelRGBA = getPixel(imageData, 0, 0);

    console.log(pixelRGBA);
  }, []);

  return <canvas ref={canvasRef} width="200" height="200" id="my-canvas" />;
};

const mapStateToProps = (state) => {
  return {
    canvasWidth: state.canvasReducer.canvasWidth,
    canvasHeight: state.canvasReducer.canvasHeight,
  };
};

export default connect(mapStateToProps, {})(Canvas);
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
