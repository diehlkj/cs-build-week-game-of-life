import React from "react";
import { ReactComponent as Close } from "../assets/icons/icon_info.svg";

export default function About() {
  return (
    <div className="about-container">
      <h2>ABOUT</h2>
      <div>
        <p>
          The Game of Life, also known simply as Life, is a cellular automaton
          devised by the British John Horton Conway in 1970. It is a zero-player
          game, meaning that its evolution is determined by its initial state,
          requiring no further input. One interacts with the Game of Life by
          creating an initial configuration and observing how it evolves. It is
          Turing complete and can simulate a universal constructor or any other
          Turing machine. Every cell interacts with its eight neighbours, which
          are the cells that are horizontally, vertically, or diagonally
          adjacent.
        </p>
      </div>

      <div>
        <p>
          At each generational iteration (tick), the following transitions
          occur:
        </p>

        <ul>
          <li>
            Any live cell with fewer than two live neighbours dies, as if caused
            by under-population.
          </li>

          <li>
            Any live cell with two or three live neighbours lives on to the next
            generation.
          </li>

          <li>
            Any live cell with more than three live neighbours dies, as if by
            over-population.
          </li>

          <li>
            Any dead cell with exactly three live neighbours becomes a live
            cell, as if by reproduction.
          </li>
        </ul>
      </div>
      <div>
        <Close
          onClick={(e) => {
            e.preventDefault();
            let aboutSec = document.getElementsByClassName("about-container");
            console.log(aboutSec);
            aboutSec[0].style.transform = "translateX(400px)";
          }}
        />
      </div>
    </div>
  );
}
