import { notFound } from "next/navigation";

import styles from "./page.module.css";

import { Container, ContainerSpacing } from "@/components/Container";
import { Main } from "@/components/Main";
import { H2 } from "@/components/Typography";

import projects from "@/data/projects.json";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function Project({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return notFound();
  }

  return (
    <Main>
      <Container spacing={ContainerSpacing.Large}>
        <H2>{project.name}</H2>
      </Container>
    </Main>
  );
}
