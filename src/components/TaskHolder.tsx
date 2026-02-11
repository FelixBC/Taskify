import React from "react";
import type { Todo } from "./model";
import "./TaskHolder.css";
import Header from "./Header";
import IconButton from "./IconButton";
import { FaCheck } from "react-icons/fa";
import type { SubmitEvent } from "react";

type TodosProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

// set todos in case we add delete here etc.
const TaskHolder: React.FC<TodosProps> = ({ todos, setTodos }) => {
  const icon = <FaCheck />;
  const handleDone = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isDone: true } : todo,
      ),
    );
  };
  return (
    <div>
      <Header className="heading">Undone Tasks</Header>
      <ol className="task__list">
        {todos.map((todo) => (
          <li key={todo.id} className="task__item--undone">
            {todo.todo}
            <IconButton
              icon={icon}
              iconProps={
                {
                  size: 20,
                  className: "task__list-icon",
                } /* onClick={handleDone} */
              }
            />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TaskHolder;
