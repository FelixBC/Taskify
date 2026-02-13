import type React from "react";
type IconButtonProps = {
  className?: string;
  icon: React.ReactNode;
  iconProps?: { size: number };
  onClick: () => void;
};

// my goal is to make this component ICON reusable with the button on click function.
//The functionality is the same always, the only thing that change is the icon, so if i find a way to
// send the only thing that change and display it in this component would be great.
const IconButton: React.FC<IconButtonProps> = ({
  icon,
  iconProps,
  onClick,
  ...props
}) => {
  return (
    <div>
      <button type="button" onClick={onClick} {...props}>
        {icon}
      </button>
    </div>
  );
};
export default IconButton;
