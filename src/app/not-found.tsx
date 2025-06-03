import Link from "next/link";

import styles from "./page.module.css";

import { Container } from "@/components/Container";
import { H1, P } from "@/components/Typography";
import { LogoLazy } from "@/components/Logo/LogoLazy";
import { Main } from "@/components/Main";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <Main>
      <Container className={styles.container}>
        <LogoLazy />
        <H1>404! Page not found</H1>
        <P>
          Looks like something's broken, it's not you it's us. How about going
          back to the home page?
        </P>
        <div>
          <Link href="/">
            <Button>Back home</Button>
          </Link>
        </div>
      </Container>
    </Main>
  );
}
