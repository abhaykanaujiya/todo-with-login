import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import Reducers from "./Reducers";
import "./index.css";
import Routers from "./Routers/Routers";
import Todo from "./Components/Pages/Todo";
import SignUp  from "./Components/Pages/SignUp";

const store = createStore(Reducers, {}, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
    <Routers />
    {/* <SignUp/> */}
    <Todo />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
