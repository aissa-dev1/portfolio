import styles from "./Header.module.css";

import { Container } from "../Container";
import { HeaderNavLink } from "./HeaderNavLink";
import Image from "next/image";

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <nav className={styles.nav}>
          <HeaderNavLink tabIndex={1} href="/">
            Home
          </HeaderNavLink>
          <HeaderNavLink tabIndex={2} href="/about">
            About
          </HeaderNavLink>
          <HeaderNavLink tabIndex={3} href="/projects">
            Projects
          </HeaderNavLink>
        </nav>
        <div>
          <p>Github</p>
        </div>
      </Container>
    </header>
  );
};

export { Header };
