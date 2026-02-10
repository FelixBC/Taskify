import Header from "./components/Header";
import AddTaskInput from "./components/AddTaskInput";
import "./styles/global.css";
import "./components/App.css"
import { useState } from "react";
import type { SubmitEvent } from "react";
import type { Todo } from "./components/model";
import TaskHolder from "./components/TaskHolder";

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo) {
      //Mutation rule: Do not mutate arrays, or objects.
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <div className="app">
      <Header className="heading">Taskify</Header>
      <AddTaskInput todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TaskHolder todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
