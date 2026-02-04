import React from "react";

type Props = {
  type: string;
  handleChange: () => void;
  handleClick: () => void;
};
// in case we add more inputs the transformation will be easier for the next developer.
const AddTaskInput: React.FC<Props> = ({
  type = "text",
  handleChange,
  handleClick,
}) => {
  return (
    <form className="card">
      <input
        className="card__Input"
        type={type}
        onChange={() => handleChange()}
        required
      />
      <button className="card__button--submit" onClick={() => handleClick()}>
        Go
      </button>
    </form>
  );
};

export default AddTaskInput;
