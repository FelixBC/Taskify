import React from "react";
import type { SubmitEvent, ChangeEvent } from "react";
import "./AddTaskInput.css";

type Props = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: SubmitEvent<HTMLFormElement>) => void;
};

// in case we add more inputs the transformation will be easier for the next developer.
const AddTaskInput: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  return (
    <form className="add-task-form" onSubmit={handleAdd}>
      <input
        className="add-task-form__input"
        value={todo}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setTodo(e.target.value)}
        required
      />
      <button type="submit" className="add-task-form__button">
        Go
      </button>
    </form>
  );
};

export default AddTaskInput;
