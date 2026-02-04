type HeaderProps = {
  children: String; 
  className: string;
};
const Header = ({ children, ...props}: HeaderProps) => {
  return <h1 {...props}>{children}</h1>;
};

export default Header;
