import React from "react";
import type {Todo} from "./model"

type TodosProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};



const TaskHolder: React.FC<TodosProps> = ({ todos, setTodos }) => {
  return (
    <div className="todos">
      <ol>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.todo}</li>
        ))}
      </ol>
    </div>
  );
};

export default TaskHolder;
