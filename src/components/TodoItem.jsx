function TodoItem(todos, toggleComplete, removeTodo) {
    return (
      <li className="flex items-center justify-start border-t border-grey-300 py-2">
        <input type="checkbox" checked={todos.completed} onChange={() => toggleComplete(todos.id)} className="size-5 cursor-pointer rounded border-slate-300 border-b-gray-500 transition-all checked:border-blue-600 chceck:bg-blue-400 hover:shadow-md" />
        <span style={{ textDecoration: todos.completed ? "line-through" : "none" }} className="mx-4">{todos.text}</span>
        <button onClick={() => removeTodo(todos.id)}>Löschen</button>
      </li>
    );
  };
  
  export default TodoItem;
  