type HeaderProps = {
  children: React.ReactNode; 
  className?: string;
};
const Header = ({ children, className}: HeaderProps) => {
  return <h1 className={className}>{children}</h1>;
};

export default Header;
