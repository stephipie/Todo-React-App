import { useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "todo 1", completed: false },
    { id: 2, text: "todo 2", completed: false },
  ]);

  //function to add a todo
  const addTodo = (todo) => {
    //early return for empty todo
    if (todo.trim() === "") {
      return;
    }
    const newTodo = {
      id: todos.length + 1,
      text: todo,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    console.log("Todos:", todos);
  };
  return (
    <>
      <TodoForm addTodo={addTodo} todos={todos} />

      <main className="bg-white p-4">
        <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-start border-t border-gray-300 py-2"
            >
              <TodoItem todo={todo} />
            </li>
          ))}
        </ul>
      </main>
      <footer></footer>
    </>
  );
}

export default TodoList;
