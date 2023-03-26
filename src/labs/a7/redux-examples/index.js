import React from "react";
import HelloReduxExampleComponent from "./hello-redux-example-component";
import {Provider} from "react-redux";
// import {createStore} from "redux";
import hello from "./reducers/hello";
import Todos from "./todos-component";
import { configureStore } from "@reduxjs/toolkit";
import todos from "./reducers/todos-reducer";
// const store = createStore(hello);
const store = configureStore({
    reducer: {hello, todos}
});

const ReduxExamples = () => {
  return(
    <Provider store={store}>
        <div>
        <h2>Redux Examples</h2>
        <Todos/>
        <HelloReduxExampleComponent/>
        </div>
    </Provider>
  );
};

export default ReduxExamples;