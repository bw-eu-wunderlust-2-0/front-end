import * as types from "./actionTypes";
import { axiosWithAuth } from "../Utils/axiosAuth";

export const getTodoList = () => dispatch => {
  axiosWithAuth()
    .get("/todos")
    .then(res => {
      const todos = res.data;
      console.log(todos);
      dispatch({
        type: types.GET_TODOS,
        payload: todos
      });
    })
    .catch(err => console.log(err));
};

export const postNewTask = newTaskData => dispatch => {
  axiosWithAuth()
    .post("/todos", newTaskData)
    .then(res => {
      console.log(res.data);
      dispatch({
        type: types.GET_TODOS,
        payload: res.data
      });
    })
    .catch(err => err);
};

export const deleteTask = (theid, item) => dispatch => {
  axiosWithAuth()
    .delete("/todos/" + theid)
    .then(res => {
      // getListOfFriends();
      item.filter(task => task.id !== theid); // updates front end faster without a network request

      console.log("CONSOLE OUTPUT: delete -> res.data", res.data);
      dispatch({
        type: types.GET_TODOS,
        payload: res.data
      });
    })
    .catch(err => err);
};

export const inputChange = (name, value) => {
  return {
    type: types.INPUT_CHANGE,
    payload: {
      name,
      value
    }
  };
};

export const submit = () => {
  return {
    type: types.SUBMIT
  };
};

export const searchInputChange = (name, value) => {
  return {
    type: types.SEARCH_INPUT_CHANGE,
    payload: {
      name,
      value
    }
  };
};
