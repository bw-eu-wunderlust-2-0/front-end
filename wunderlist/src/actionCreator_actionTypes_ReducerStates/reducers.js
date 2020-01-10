import * as types from "./actionTypes";

// REDUCER TO GET THE INITIAL TODO LIST
//AND POST A NEW TASK

const initialTaskList = [
  {
    title: "teeeeeest",
    task: "do some tests",
    setDate: "today",
    user_id: "6476625653"
  }
];

export const toDoReducer = (todo = initialTaskList, action) => {
  switch (action.type) {
    case types.GET_TODOS:
      return action.payload;
    default:
      return todo;
  }
};

const initialToDoFormValues = {
  //   id: 4536,
  //     user_id: 2357,
  title: "",
  task: "",
  notes: "something",
  setDate: "2020-10-24",
  completed: false,
//   created_at: "2020-10-24T12:36:27.625Z",
//   updated_at: "2020-10-24T12:36:27.625Z"
};

export const taskFormReducer = (form = initialToDoFormValues, action) => {
  switch (action.type) {
    case types.INPUT_CHANGE:
      return {
        ...form,
        [action.payload.name]: action.payload.value
      };
    case types.SUBMIT:
      return initialToDoFormValues;
    default:
      return form;
  }
};

const searchQueryValue = {
  searchInput: ""
};

export const searchFormReducer = (searchValue = searchQueryValue, action) => {
  switch (action.type) {
    case types.SEARCH_INPUT_CHANGE:
      return {
        ...searchValue,
        [action.payload.name]: action.payload.value
      };
    case types.SUBMIT:
      return searchQueryValue;
    default:
      return searchValue;
  }
};
