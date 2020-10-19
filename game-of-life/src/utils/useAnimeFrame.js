import React, { useEffect, useState } from "react";

// * custom hook for using animation frame:
export const useAnimeFrame = (timestamp, doAnimationCallback) => {
  // * Setup prev timestamp
  const [prevTimestamp, setTimestamp] = useState(timestamp - 30);
  const [continueAnimation, setContinueAnimation] = useState(true);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    // * only starts the animation if we havent in the past
    if (!started) {
      setStarted(true);
      requestAnimationFrame(onFrame);
    }
  }, [started]);

  // * Request the first animation frame to start
  const onFrame = (timestamp) => {
    // * If we want to do more, request the next frame
    if (continueAnimation) {
      requestAnimationFrame(onFrame);
    }
    const elapsed = prevTimestamp - timestamp;
    setTimestamp(timestamp);
    console.log(`Current time: ${timestamp} ms, frame time: ${elapsed} ms`);

    // * Call the callback and pass it the elapsed time
    doAnimationCallback(elapsed);
  };

  const cancelAnimation = () => {
    setContinueAnimation(false);
  };

  return [cancelAnimation];
};
