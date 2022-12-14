import { format } from "date-fns";
import { FooterProps } from "./FooterProps";
import cn from "classnames";
import styles from "./Footer.module.css";

export const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <div> NDTop © 2020 - {format(new Date(), "yyyy")} Все права защищены</div>
      <a href="#" target="_blank">
        Пользовательское соглашение
      </a>
      <a href="#" target="_blank">
        Политика конфиденциальности
      </a>
    </footer>
  );
};
