import type { IconType } from "react-icons";
type TaskIconProps = {
  icon: IconType;
};
// my goal is to make this component ICON reusable with the button on click function.
//The functionality is the same always, the only thing that change is the icon, so if i find a way to
// send the only thing that change and display it in this component would be great.
const TaskIcon: React.FC<TaskIconProps> = ({ icon }) => {
  return (
    <div>
      <button type="button">
      </button>
    </div>
  );
};
