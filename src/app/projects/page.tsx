import Link from "next/link";

import styles from "./page.module.css";

import { Container, ContainerSpacing } from "@/components/Container";
import { Main } from "@/components/Main";
import { LogoLazy } from "@/components/Logo/LogoLazy";
import { H1 } from "@/components/Typography";
import {
  Card,
  CardContent,
  CardDescription,
  CardDescriptionVariant,
  CardTitle,
} from "@/components/Card";

import projects from "@/data/projects.json";

export default function Projects() {
  return (
    <Main>
      <Container spacing={ContainerSpacing.Large}>
        <LogoLazy />
        <H1>Projects</H1>
        <div className={styles.cards}>
          {projects.map((project) => (
            <Card key={project.slug}>
              <Link href={`/projects/${project.slug}`}>
                <div className={styles.cardHeader}>
                  <div className={styles.projectLogo} />
                </div>
              </Link>
              <CardContent>
                <Link href={`/projects/${project.slug}`}>
                  <CardTitle>{project.name}</CardTitle>
                </Link>
                <CardDescription variant={CardDescriptionVariant.Primary}>
                  {project.site ? (
                    <a href={project.site} target="_blank">
                      {project.site}
                    </a>
                  ) : (
                    "live soon!"
                  )}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Main>
  );
}
