import { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addTodo = () => {
    if (editIndex !== null) {
      const newTodos = [...todos];
      newTodos[editIndex] = task;
      setTodos(newTodos);
      setEditIndex(null);
    } else {
      setTodos([...todos, task]);
    }

    setTask("");
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const editTodo = (index) => {
    setTask(todos[index]);
    setEditIndex(index);
  };

  return (
    <div>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Type..."
      />
      <button onClick={addTodo}>{editIndex !== null ? "Update" : "Add"}</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => editTodo(index)}>Edit</button>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
