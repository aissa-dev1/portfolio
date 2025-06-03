import styles from "./page.module.css";

import { Container } from "@/components/Container";
import { H1, P } from "@/components/Typography";
import { LogoLazy } from "@/components/Logo/LogoLazy";
import { Main } from "@/components/Main";

export default function About() {
  return (
    <Main>
      <Container className={styles.container}>
        <LogoLazy />
        <H1>About me</H1>
        <P>Hello world!</P>
      </Container>
    </Main>
  );
}
