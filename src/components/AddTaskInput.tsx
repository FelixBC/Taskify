import React from "react";
import type { SubmitEvent, ChangeEvent } from "react";
import  "./AddTaskInput.css";

type Props = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: SubmitEvent<HTMLFormElement>) => void;
};

// in case we add more inputs the transformation will be easier for the next developer.
const AddTaskInput: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  return (
    <form className="card" onSubmit={handleAdd}>
      <input
        className="card__input"
        value={todo}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setTodo(e.target.value)}
        required
      />
      <button type="submit" className="card__button--submit">
        Go
      </button>
    </form>
  );
};

export default AddTaskInput;
