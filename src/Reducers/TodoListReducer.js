const INITIAL_STATE = {
  todo: [],
  text: "",
  edit: "",
  selectedId: null,
};

const TodoListReducer = (state = INITIAL_STATE, action) => {
  console.log(action, "TodoListReducer");
  switch (action.type) {
    case "TEXT":
      return {
        ...state,
        text: action.payload,
      };
    default:
      return state;
  }
};
export default TodoListReducer;
