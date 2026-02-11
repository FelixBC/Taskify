import type React from "react";
type IconProps = {
  size?: number;
  className?: string;
};
type IconButtonProps = {
  icon: React.ReactNode;
  iconProps?: IconProps;
};

// my goal is to make this component ICON reusable with the button on click function.
//The functionality is the same always, the only thing that change is the icon, so if i find a way to
// send the only thing that change and display it in this component would be great.
const IconButton: React.FC<IconButtonProps> = ({
  icon,
  iconProps,
  ...props
}) => {
  return (
    <div>
      <button type="button" {...props}>
        {icon}
      </button>
    </div>
  );
};
export default IconButton;
