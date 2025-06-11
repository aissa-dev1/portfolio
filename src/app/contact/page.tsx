import styles from "./page.module.css";

import { Container, ContainerSpacing } from "@/components/Container";
import { LogoLazy } from "@/components/Logo/LogoLazy";
import { Main } from "@/components/Main";
import { H1, H2, P, TypographyVariant } from "@/components/Typography";
import { ContactForm } from "@/components/ContactForm";

export default function Contact() {
  return (
    <Main>
      <Container spacing={ContainerSpacing.Large}>
        <LogoLazy />
        <H1>Contact me</H1>
        <H2 variant={TypographyVariant.Primary}>
          {process.env.NEXT_PUBLIC_SEND_MAIL_EMAIL}
        </H2>
        <P>Have a question or idea in mind? I'm just a message away.</P>
        <ContactForm />
      </Container>
    </Main>
  );
}
