import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setGridInstance } from "../redux/actions";

const Grid = ({
  gridSquared,
  gridResolution,
  liveColor,
  deadColor,
  gridInstance,
  setGridInstance,
}) => {
  const size = [];

  const cellSize = gridResolution / gridSquared;
  for (let i = 1; i <= gridSquared * gridSquared; i++) {
    size.push(i);
  }

  useEffect(() => {
    const cells = document.querySelectorAll(".game-cell");
    setGridInstance(cells);

    gridInstance.forEach((cell) => {
      cell.style.backgroundColor = deadColor;
    });
  }, [gridSquared]);

  const toggleLife = (e) => {
    e.preventDefault();

    if (e.target.style.backgroundColor == liveColor) {
      e.target.style.backgroundColor = deadColor;
    } else {
      e.target.style.backgroundColor = liveColor;
    }
  };
  return (
    <>
      {size.map((index) => {
        return (
          <div
            key={index}
            className="game-cell"
            style={{
              width: cellSize,
              height: cellSize,
              backgroundColor: deadColor,
            }}
            onClick={toggleLife}
          >
            {index}
          </div>
        );
      })}
    </>
  );
};

const mapPropsToState = (state) => {
  return {
    gridSquared: state.gridReducer.gridSquared,
    gridResolution: state.gridReducer.gridResolution,
    liveColor: state.gridReducer.liveColor,
    deadColor: state.gridReducer.deadColor,
    gridInstance: state.gridReducer.gridInstance,
  };
};

export default connect(mapPropsToState, {
  setGridInstance,
})(Grid);
