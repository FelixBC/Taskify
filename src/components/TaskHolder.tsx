import React from "react";
import type { Todo } from "./model";
import "./TaskHolder.css";
import IconButton from "./IconButton";
import { FaCheck, FaTrash } from "react-icons/fa";

type TodosProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

// set todos in case we add delete here etc.
const TaskHolder: React.FC<TodosProps> = ({ todos, setTodos }) => {
  const iconCheck = <FaCheck />;
  const iconDelete = <FaTrash />;
  const handleDone = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isDone: true } : todo,
      ),
    );
  };
//this needs more thought... but it could work. problably there is a better way, just did the one that was easier reusing existing code..
  const handleDelete = (id:number) =>{
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id !== id ? { ...todo } : todo,
      ),
    );
  }
  return (
    <div>
      <ol className="task__list">
        {todos.map((todo) => (
          <li key={todo.id} className="task__item--undone">
            {todo.todo}
            <IconButton
              className="task__list-icon-check"
              icon={iconCheck}
              onDone={handleDone}
              iconProps={{
                size: 20,
              }}
            />

            <IconButton
              className="task__list-icon-delete"
              icon={iconDelete}
              onDone={handleDelete}
              iconProps={{
                size: 20,
              }}
            />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TaskHolder;
