"use client";

import Image from "next/image";

import styles from "./Logo.module.css";

interface Props {}

const Logo: React.FC<Props> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoWrapper}>
        <Image
          src="/logo.png"
          alt="Aissa Bedr Logo"
          className={styles.logo}
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};

export { Logo };
