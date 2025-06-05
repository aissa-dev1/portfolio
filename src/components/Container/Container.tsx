import { ComponentProps } from "react";
import clsx from "clsx";

import styles from "./Container.module.css";

enum ContainerSpacing {
  None = "none",
  Large = "spacingLg",
}

interface Props extends ComponentProps<"div"> {
  spacing?: ContainerSpacing;
}

const Container: React.FC<Props> = ({
  className,
  spacing = ContainerSpacing.None,
  ...rest
}) => {
  return (
    <section
      className={clsx(
        styles.container,
        spacing !== ContainerSpacing.None && styles[spacing],
        className
      )}
      {...rest}
    />
  );
};

export { Container, ContainerSpacing };
