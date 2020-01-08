import * as types from "./actionTypes";
import { axiosWithAuth } from "../Utils/axiosAuth";

export const getTodoList = () => dispatch => {
  axiosWithAuth()
    .get("/todos")
    .then(res => {
      const todos = res.data;
      dispatch({
        type: types.GET_TODOS,
        payload: todos
      });
    })
    .catch(err => console.log(err));
};
