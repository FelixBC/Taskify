import Header from "./components/Header";
import AddTaskInput from "./components/AddTaskInput";
import "./styles/global.css";
import "./components/App.css";
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
      setTodos((prev) => [...prev, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

const hasValue:boolean = todos.length > 0;

  return (
    <div className="app">
      <div className="add-task__main-content">
        <Header className="heading">Taskify</Header>
        <AddTaskInput todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      </div>
      <div className="app__column--left">
        <Header className="heading">Undone Tasks</Header>
        {hasValue && <TaskHolder todos={todos} setTodos={setTodos} />}
      </div>
      <div className="app__column--right">
        <Header className="heading">Done Tasks</Header>
        {hasValue && <TaskHolder todos={todos} setTodos={setTodos}  />}
      </div>
    </div>
  );
}

export default App;
