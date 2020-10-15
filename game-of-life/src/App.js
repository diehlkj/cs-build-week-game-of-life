// * React
import React from "react";

// * Redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { rootReducer as reducers } from "redux/reducers/index";

// * Major Components
import Canvas from "components/Canvas";

// * Styling
import "styling/app.scss";

const store = createStore(reducers, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Canvas />
      </div>
    </Provider>
  );
}

export default App;
