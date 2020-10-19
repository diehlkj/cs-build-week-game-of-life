// * React
import React from "react";

// * Redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { rootReducer as reducers } from "redux/reducers/index";

// * Major Components
import Grid from "components/Grid";

// * Styling
import "styling/app.scss";

const store = createStore(reducers, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="grid-container">
          <Grid />
        </div>
      </div>
    </Provider>
  );
}

export default App;

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
