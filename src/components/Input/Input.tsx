import { ComponentProps } from "react";
import clsx from "clsx";

import styles from "./Input.module.css";

interface Props extends ComponentProps<"input"> {}

const Input: React.FC<Props> = ({ className, ...rest }) => {
  return <input className={clsx(styles.input, className)} {...rest} />;
};

export { Input };
