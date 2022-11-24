import { HeaderProps } from "./HeaderProps";
import styles from "./Header.module.css";

export const Header = ({ ...props }: HeaderProps) => {
  return <header {...props}>Header</header>;
};
