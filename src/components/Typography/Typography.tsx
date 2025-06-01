import { ComponentProps } from "react";
import clsx from "clsx";

import styles from "./Typography.module.css";

enum TypographyVariant {
  Default = "default",
  Primary = "primary",
}

interface SharedProps {
  variant?: TypographyVariant;
}

interface H1Props extends ComponentProps<"h1">, SharedProps {}

const H1: React.FC<H1Props> = ({ className, ...rest }) => {
  return <h1 className={clsx(styles.h1, className)} {...rest} />;
};

interface H2Props extends ComponentProps<"h2">, SharedProps {}

const H2: React.FC<H2Props> = ({
  className,
  variant = TypographyVariant.Default,
  ...rest
}) => {
  return (
    <h2
      className={clsx(
        styles.h2,
        variant === TypographyVariant.Primary && styles.primary,
        className
      )}
      {...rest}
    />
  );
};

interface ParagraphProps extends ComponentProps<"p">, SharedProps {}

const P: React.FC<ParagraphProps> = ({ className, ...rest }) => {
  return <p className={clsx(styles.p, className)} {...rest} />;
};

interface SpanProps extends ComponentProps<"span">, SharedProps {}

const Span: React.FC<SpanProps> = ({ className, ...rest }) => {
  return <span className={clsx(styles.span, className)} {...rest} />;
};

export { H1, H2, P, Span, TypographyVariant };
