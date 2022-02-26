const INITIAL_STATE = {
  todo: [],
};
const TodoReducer = (state = INITIAL_STATE, action) => {
  console.log(action, "action");
  switch (action.type) {
    case "TODO":
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };
    default:
      return state;
  }
};

export default TodoReducer;
