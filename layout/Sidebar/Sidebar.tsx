import { SidebarProps } from "./SidebarProps";
import styles from "./Sidebar.module.css";

export const Sidebar = ({ ...props }: SidebarProps) => {
  return <nav {...props}>Sidebar</nav>;
};
