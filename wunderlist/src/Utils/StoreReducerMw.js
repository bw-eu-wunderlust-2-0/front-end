import React from "react";

import ReactDOM from "react-dom";
import thunk from "redux-thunk";

import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { toDoReducer } from "../actionCreator_actionTypes_ReducerStates/reducers";

const generalReducer = combineReducers({
  toDoList: toDoReducer
});

export const store = createStore(
  generalReducer,
  {},
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);