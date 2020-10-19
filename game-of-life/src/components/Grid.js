import React, { useEffect } from "react";
// import { connect } from "react-redux";

const Grid = () => {
  const width = 100;
  const height = 100;
  const size = [];

  for (let i = 1; i <= width * height; i++) {
    size.push(i);
  }

  console.log(size.length);
  console.log(size);

  useEffect(() => {
    const cells = document.querySelectorAll(".game-cell");
    console.log(cells);
    cells.forEach((cell) => {
      cell.style.backgroundColor = "white";
    });

    console.log(cells[0].style.backgroundColor);
  }, [])

  const toggleLife = (e) => {
    e.preventDefault();
    console.log("I clicked");

    console.log(e.target.style.backgroundColor);

    if (e.target.style.backgroundColor !== "black") {
      e.target.style.backgroundColor = "black";
    } else {
      e.target.style.backgroundColor = "white";
    }
    
  }
  return (
    <>
      {size.map((index) => {
        console.log("made square haha ");
        return <div key={index} className="game-cell" onClick={toggleLife}>{index}</div>;
      })}
    </>
  );
};

export default Grid;
