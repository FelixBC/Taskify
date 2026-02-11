import React from "react";
import type { Todo } from "./model";
import "./TaskHolder.css";
import Header from "./Header";
import { FaCheck } from "react-icons/fa";

type TodosProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

// set todos in case we add delete here etc.
const TaskHolder: React.FC<TodosProps> = ({ todos, setTodos }) => {
  return (
    <div>
      <Header className="heading">Undone Tasks</Header>
      <ol className="task__list">
        {todos.map((todo) => (
          <li key={todo.id} className="task__item--undone">
            {todo.todo}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TaskHolder;
