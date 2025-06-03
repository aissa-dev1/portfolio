import Link from "next/link";

import styles from "./page.module.css";

import { Container } from "@/components/Container";
import { H1, H2, P, TypographyVariant } from "@/components/Typography";
import { Button } from "@/components/Button";
import { LogoLazy } from "@/components/Logo/LogoLazy";
import { Main } from "@/components/Main";

export default function Home() {
  return (
    <Main>
      <Container className={styles.container}>
        <LogoLazy />
        <H1>Hey, It's me Aissa Bedr</H1>
        <div className={styles.jobTitleAndDescription}>
          <H2 variant={TypographyVariant.Primary}>Full Stack Developer</H2>
          <P>
            A self-taught developer with 3+ years of experience in web
            development, specializing in TypeScript, Next.js, and Nest.js. I
            enjoy building fast, scalable, and reusable components, whether for
            the frontend or backend.
          </P>
        </div>
        <div>
          <Link href="/contact">
            <Button tabIndex={4}>Contact me</Button>
          </Link>
        </div>
      </Container>
    </Main>
  );
}
