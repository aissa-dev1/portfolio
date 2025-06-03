"use client";

import Link, { LinkProps } from "next/link";
import { ComponentProps } from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";

import styles from "./Header.module.css";

interface Props extends ComponentProps<"a">, Omit<LinkProps, "href"> {}

const HeaderNavLink: React.FC<Props> = ({ className, href, ...rest }) => {
  const pathName = usePathname();

  return (
    <Link
      className={clsx(styles.navLink, className)}
      href={href ?? "/"}
      data-active={pathName === href}
      {...rest}
    />
  );
};

export { HeaderNavLink };
