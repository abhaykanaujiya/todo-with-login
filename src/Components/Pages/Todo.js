import React, { useState } from "react";
import { getTodoText } from "../../Actions/TodoActions";
import { connect } from "react-redux";

export const Todo = (props) => {
  const [todoText, setTodoText] = useState("");
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState();
  const [selectedId, setSelectedId] = useState(-1);

  const handleChange = (e) => {
    props.getTodoText(e);
    
  };
  console.log(todoText, "todo text");
  const handleClick = () => {
    console.log(todoText, "tododd");
    const newTodo = {
      id: new Date().getTime(),
      text: todoText,
    };
    setList([...list, newTodo]);
    setTodoText("");
    // props.getTodoText(list);
  };
  const handleRemove = (id) => {
    console.log(id, "id");
    const updateTodos = list.filter((todo) => todo.id !== id);
    setList(updateTodos);
  };
  const handleEditChange = (e) => {
    setEdit(e.target.value);
  };
  const handleEdit = (id) => {
    setSelectedId(id);
  };
  const handleSave = () => {
    console.log(edit, "edit");
    setSelectedId(-1);
    setEdit();
    const newList = list;
    newList.map((data) => {
      if (data.id === selectedId.id) {
        data.text = edit;
      }
      return data;
    });
    console.log(newList, "new list");
    setList(newList);
  };
  console.log(list, "list");
  return (
    <div className="todo-body">
      <div className="todo-form">
        <input
          type="text"
          value={props.text}
          placeholder="enter text"
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handleClick}>Add</button>
      </div>
      <div className="todo-list">
        {list.map((todo) => (
          <div key={todo.id}>
            <div>
              {selectedId.id === todo.id ? (
                <input
                  type="text"
                  value={edit}
                  onChange={(e) => handleEditChange(e)}
                />
              ) : (
                <div>{todo.text}</div>
              )}
            </div>
            <button onClick={() => handleRemove(todo.id)}>remove</button>
            <button
              onClick={
                selectedId.id !== todo.id
                  ? () => handleEdit(todo)
                  : () => handleSave()
              }
            >
              {selectedId.id === todo.id ? "Save" : "Edit"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = ({ TodoListReducer }) => {
  const { todo, text, edit, selectedId } = TodoListReducer;
  return {
    todo,
    text,
    edit,
    selectedId,
  };
};

export default connect(mapStateToProps, { getTodoText })(Todo);
