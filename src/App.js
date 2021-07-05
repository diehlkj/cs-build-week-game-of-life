// * React
import React from "react";

// * Redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { rootReducer as reducers } from "./redux/reducers/index";

// * Major Components
import Grid from "./components/Grid";
import SimControls from "./components/SimControls";
import About from "./components/About";

// * Styling
import "./styling/app.scss";

export const store = createStore(reducers, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <section className="grid-container">
          <Grid />
        </section>

        <section className="content-controls">
          <h1>
            CONWAY'S
            <br />
            GAME
            <br />
            OF
            <br />
            LIFE
          </h1>

          <About />
          <SimControls />
        </section>
      </div>
    </Provider>
  );
}

export default App;

// TODO: Function to regenerate the grid according to cell count and resolution defined by the user.
// TODO: This fuction will need to redraw, then trigger a recapture of the grids state in simControls

// TODO: When the simulation is running, gray out the iterate button, clear button, and controls
// TODO: for changing resolution and cell count.
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
 */
