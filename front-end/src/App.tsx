import { useEffect, useState } from "react";
import { TodoItem } from "./components/TodoItem";

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .then((err: any) => console.log(err));
  }, []);

  if (!todos.length) return <div>Loading ....</div>;

  return (
    <div className="max-w-md mx-auto shadow-md bg-slate-200 px-2 py-5 my-6">
      {todos.map((todo: any) => (
        <TodoItem key={todo._id} {...todo} />
      ))}
    </div>
  );
}
