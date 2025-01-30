import { useState } from "react";

function TodoForm({ addTodo })  {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex justify-between">
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Neues Todo..." className="mr-3 w-full border p-2"/>
      <button type="submit" className="bg-[#0093E9] px-4 py-2 font-semibold text-white">Hinzufügen</button>
    </form>
  );
};

export default TodoForm;



