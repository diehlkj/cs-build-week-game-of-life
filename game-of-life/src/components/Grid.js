import React, { useEffect } from "react";
import { connect } from "react-redux";

const Grid = ({ gridSquared, liveColor, deadColor }) => {
  const size = [];

  for (let i = 1; i <= gridSquared * gridSquared; i++) {
    size.push(i);
  }

  // console.log(size.length);
  // console.log(size);

  useEffect(() => {
    const cells = document.querySelectorAll(".game-cell");
    console.log(cells);
    cells.forEach((cell) => {
      cell.style.backgroundColor = deadColor;
    });

    // console.log(cells[0].style.backgroundColor);
  }, [deadColor])

  const toggleLife = (e) => {
    e.preventDefault();
    // console.log("I clicked");

    // console.log(e.target.style.backgroundColor);

    if (e.target.style.backgroundColor !== liveColor) {
      e.target.style.backgroundColor = liveColor;
    } else {
      e.target.style.backgroundColor = deadColor;
    }
    
  }
  return (
    <>
      {size.map((index) => {
        // console.log("made square haha ");
        return <div key={index} className="game-cell" onClick={toggleLife}>{index}</div>;
      })}
    </>
  );
};

const mapPropsToState = (state) => {
  return {
    gridSquared: state.gridReducer.gridSquared,
    liveColor: state.gridReducer.liveColor,
    deadColor: state.gridReducer.deadColor,
  };
};

export default connect(mapPropsToState, {})(Grid);
