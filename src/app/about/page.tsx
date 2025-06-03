import styles from "./page.module.css";

import { Container } from "@/components/Container";
import { H1, H2, P } from "@/components/Typography";
import { LogoLazy } from "@/components/Logo/LogoLazy";
import { Main } from "@/components/Main";
import { Card, CardContent, CardHeader } from "@/components/Card";

import about from "@/data/about.json";

export default function About() {
  return (
    <Main>
      <Container className={styles.container}>
        <LogoLazy />
        <H1>About me</H1>
        <div className={styles.sections}>
          {about.map((section, i) => (
            <div className={styles.section} key={i}>
              <H2>{section.heading}</H2>
              <P>{section.content}</P>
            </div>
          ))}
          <div className={styles.section}>
            <H2>Tools & Skills</H2>
            <div className={styles.skillsCards}>
              <Card>
                <CardContent>
                  <P>Languages</P>
                  <P>JavaScript, TypeScript, C#, Rust</P>
                </CardContent>
              </Card>
              <Card>
                <P>Languages</P>
                <P>JavaScript, TypeScript, C#, Rust</P>
              </Card>
              <Card>
                <P>Languages</P>
                <P>JavaScript, TypeScript, C#, Rust</P>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </Main>
  );
}
