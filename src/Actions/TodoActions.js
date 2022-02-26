export const getTodoText = (e) => {
  console.log(e.target.value, "getTodoText");
  return (dispatch) => {
    dispatch({ type: "TEXT", payload: e.target.value });
  };
};
