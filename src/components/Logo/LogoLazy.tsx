"use client";

import dynamic from "next/dynamic";

import styles from "./Logo.module.css";

const Logo = dynamic(() => import("./Logo").then((mod) => mod.Logo), {
  ssr: false,
  loading: () => (
    <div className={styles.container}>
      <div className={styles.logoWrapper} />
    </div>
  ),
});

interface Props {}

const LogoLazy: React.FC<Props> = () => {
  return <Logo />;
};

export { LogoLazy };
