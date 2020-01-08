import * as types from "./actionTypes";

// REDUCER TO GET THE INITIAL TODO LIST

const initialFormValues = [
  {
    title: "teeeeeest",
    task: "do some tests",
    setDate: "today",
    user_id: "6476625653"
  }
];

export const toDoReducer = (todo = initialFormValues, action) => {
  switch (action.type) {
    case types.GET_TODOS:
      return action.payload;
    default:
      return todo;
  }
};
