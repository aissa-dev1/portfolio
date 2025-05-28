import Link from "next/link";

import styles from "./Header.module.css";

import { Container } from "../Container";

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
        </nav>
        <div>
          <p>Github</p>
        </div>
      </Container>
    </header>
  );
};

export { Header };
