import { useEffect, useState } from "react";
import { TodoItem } from "./components/TodoItem";
import { AddTodo } from "./components/AddTodo";
const BASE_URL = "http://localhost:5000";
const headers = {
  "Content-Type": "application/json",
};
export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  //handle getTodo
  const getTodos = async () => {
   
    fetch(`${BASE_URL}/todos`)
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .then((err: any) => console.log(err));
  };

//hadnle delete todo
const handleDeleteTodo = async (id:any) => {
  try {
    const res = await fetch(`${BASE_URL}/todos/${id}`, {
      method: "DELETE",
         headers,
    });
    if (!res.ok) throw Error("Error deleting the todo");
    alert("Todo deleted successfully!");
    //get all todos
    await getTodos();
  } catch (error) {
    alert("Todo creation failed!");
  }
};

  // handleAddTodo
  const handleAddTodo = async (data: any) => {
    try {
      const res = await fetch(`${BASE_URL}/todos`, {
        method: "POST",
        body: JSON.stringify(data),
        headers,
      });
      if (!res.ok) throw Error("Error creating the todo");
      alert("Todo created successfully!");
      //get all todos
      await getTodos();
    } catch (error) {
      alert("Todo creation failed!");
    }
  };

  if (!todos.length) return <div>Loading ....</div>;

  return (
    <div className="max-w-md mx-auto shadow-md bg-slate-200 px-2 py-5 my-6">
      <AddTodo handleAddTodo={handleAddTodo} />
      {todos.map((todo: any) => (
        <TodoItem key={todo._id} {...todo} delete={handleDeleteTodo} update={()=>null} />
      ))}
    </div>
  );
}
