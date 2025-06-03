import { ComponentProps } from "react";
import clsx from "clsx";

import styles from "./Card.module.css";

interface CardProps extends ComponentProps<"div"> {}

const Card: React.FC<CardProps> = ({ className, ...rest }) => {
  return <div className={clsx(styles.card, className)} {...rest} />;
};

interface CardHeaderProps extends ComponentProps<"div"> {}

const CardHeader: React.FC<CardHeaderProps> = ({ className, ...rest }) => {
  return <div className={clsx(styles.cardHeader, className)} {...rest} />;
};

interface CardContentProps extends ComponentProps<"div"> {}

const CardContent: React.FC<CardContentProps> = ({ className, ...rest }) => {
  return <div className={clsx(styles.cardContent, className)} {...rest} />;
};

interface CardFooterProps extends ComponentProps<"div"> {}

const CardFooter: React.FC<CardFooterProps> = ({ className, ...rest }) => {
  return <div className={clsx(styles.cardFooter, className)} {...rest} />;
};

export { Card, CardHeader, CardContent, CardFooter };
