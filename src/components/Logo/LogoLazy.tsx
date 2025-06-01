"use client";

import dynamic from "next/dynamic";

import styles from "./Logo.module.css";

const Logo = dynamic(() => import("./Logo").then((mod) => mod.Logo), {
  ssr: false,
  loading: () => <div className={styles.logoWrapper} />,
});

interface Props {}

const LogoLazy: React.FC<Props> = () => {
  return <Logo />;
};

export { LogoLazy };
