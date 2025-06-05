import { ComponentProps } from "react";
import clsx from "clsx";

import styles from "./Button.module.css";

enum ButtonSize {
  Default = "default",
  Small = "sizeSm",
}

interface Props extends ComponentProps<"button"> {
  size?: ButtonSize;
}

const Button: React.FC<Props> = ({
  className,
  size = ButtonSize.Default,
  ...rest
}) => {
  return (
    <button
      className={clsx(
        styles.button,
        size !== ButtonSize.Default && styles[size],
        className
      )}
      {...rest}
    />
  );
};

export { Button, ButtonSize };
