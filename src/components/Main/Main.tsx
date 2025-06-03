import { ComponentProps } from "react";
import clsx from "clsx";

import styles from "./Main.module.css";

interface Props extends ComponentProps<"main"> {}

const Main: React.FC<Props> = ({ className, ...rest }) => {
  return <main className={clsx(styles.main, className)} {...rest} />;
};

export { Main };
