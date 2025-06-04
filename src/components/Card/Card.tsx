import { ComponentProps } from "react";
import clsx from "clsx";

import styles from "./Card.module.css";
import { P, Span } from "../Typography";

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

interface CardTitleProps extends ComponentProps<"span"> {}

const CardTitle: React.FC<CardTitleProps> = ({ className, ...rest }) => {
  return <Span className={clsx(styles.cardTitle, className)} {...rest} />;
};

interface CardDescriptionProps extends ComponentProps<"p"> {}

const CardDescription: React.FC<CardDescriptionProps> = ({
  className,
  ...rest
}) => {
  return <P className={clsx(styles.cardDescription, className)} {...rest} />;
};

export {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
};
