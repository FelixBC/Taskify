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


  const hasDoneTask: boolean =
    todos.filter((prevTodos) => prevTodos.isDone === true).length > 0;

  const hasUnDoneTask: boolean =
    todos.filter((prevTodos) => prevTodos.isDone === false).length > 0;


  const doneTodos: Todo[] = todos.filter(
    (prevTodos) => prevTodos.isDone === true,
  );
  const unDoneTodos: Todo[] = todos.filter(
    (prevTodos) => prevTodos.isDone === false,
  );

  return (
    <div className="app">
      <div className="add-task__main-content">
        <Header className="app__main-header">Taskify</Header>
        <AddTaskInput todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      </div>

      <div className="app__column--left">
        <Header className="app__main-header">Undone Tasks</Header>
        {hasUnDoneTask && (
          <TaskHolder todos={unDoneTodos} setTodos={setTodos} />
        )}
      </div>
      <div className="app__column--right">
        <Header className="app__main-header">Done Tasks</Header>
        { hasDoneTask && <TaskHolder todos={doneTodos} setTodos={setTodos} />}
      </div>
    </div>
  );
}

export default App;
