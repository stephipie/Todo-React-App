import { useState } from "react";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";
import TodoItem from "../components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo-App</h1>
      <TodoForm onTodoAdd={addTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;

// import TodoForm from "../components/TodoForm";
// import TodoItem from "../components/TodoItem";
// import TodoList from "../components/TodoList";

// function App() {
//   return (
//       <div>
//         <TodoForm />
//         <TodoItem />
//         <TodoList />
//       </div>
//   );
// }

// export default App;
