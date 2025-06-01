import Link from "next/link";

import styles from "./Header.module.css";

import { Container } from "../Container";

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <nav className={styles.nav}>
          <Link tabIndex={1} href="/" data-active="true">
            Home
          </Link>
          <Link tabIndex={2} href="/about">
            About
          </Link>
          <Link tabIndex={3} href="/projects">
            Projects
          </Link>
        </nav>
        <div>
          <p>Github</p>
        </div>
      </Container>
    </header>
  );
};

export { Header };
