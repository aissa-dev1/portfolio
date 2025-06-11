import styles from "./Header.module.css";

import { Container } from "../Container";
import { HeaderNavLink } from "./HeaderNavLink";
import { GithubIcon } from "../icons";

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
        <a
          href="https://github.com/aissa-dev1"
          target="_blank"
          className={styles.githubLink}
        >
          <GithubIcon className={styles.githubIcon} />
        </a>
      </Container>
    </header>
  );
};

export { Header };
