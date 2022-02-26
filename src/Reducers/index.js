import { combineReducers } from "redux";
import  AuthReducer  from "./AuthReducer";
// import TodoReducer from "./TodoReducer";
import TodoListReducer from "./TodoListReducer";

export default combineReducers({ AuthReducer, TodoListReducer});
