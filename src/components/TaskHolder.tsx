import React from "react";
import type { Todo } from "./model";
import "./TaskHolder.css";
type TodosProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

// set todos in case we add delete here etc.
const TaskHolder: React.FC<TodosProps> = ({ todos, setTodos }) => {
  return (
      <ol className="card">
        {todos.map((todo) => (
          <li key={todo.id}>
            <p className="card__list">{todo.todo}</p>
          </li>
        ))}
      </ol>
  );
};

export default TaskHolder;
