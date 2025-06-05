import styles from "./page.module.css";

import { Container, ContainerSpacing } from "@/components/Container";
import { H1, H2, P } from "@/components/Typography";
import { LogoLazy } from "@/components/Logo/LogoLazy";
import { Main } from "@/components/Main";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/Card";

import about from "@/data/about.json";
import skills from "@/data/skills.json";

export default function About() {
  return (
    <Main>
      <Container spacing={ContainerSpacing.Large}>
        <LogoLazy />
        <H1>About me</H1>
        <div className={styles.wrapper}>
          <div className={styles.sections}>
            {about.map((section, i) => (
              <div className={styles.section} key={i}>
                <H2>{section.heading}</H2>
                <P>{section.content}</P>
              </div>
            ))}
          </div>
          <div className={styles.toolsAndSkills}>
            <H2>Tools & Skills</H2>
            <div className={styles.cards}>
              {skills.map((skill, i) => (
                <Card key={i}>
                  <CardContent className={styles.cardContent}>
                    <CardTitle>{skill.name}</CardTitle>
                    <CardDescription>{skill.list.join(", ")}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Main>
  );
}
