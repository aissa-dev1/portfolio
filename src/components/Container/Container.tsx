import { ComponentProps } from "react";
import clsx from "clsx";

import styles from "./Container.module.css";

interface Props extends ComponentProps<"div"> {}

const Container: React.FC<Props> = ({ className, ...rest }) => {
  return <div className={clsx(styles.container, className)} {...rest} />;
};

export { Container };
