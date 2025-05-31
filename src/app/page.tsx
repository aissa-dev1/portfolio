import Image from "next/image";
import Link from "next/link";

import styles from "./page.module.css";

import { Container } from "@/components/Container";

export default function Home() {
  return (
    <main>
      <Container>
        <Image
          src="/logo.png"
          alt="Aissa Bedr Logo"
          className={styles.logo}
          width={200}
          height={200}
        />
        <h1>Hey, It's me Aissa Bedr</h1>
        <h2 className={styles.h2}>Full Stack Developer</h2>
        <p>
          A self-taught developer with 3+ years of experience in web
          development, specializing in TypeScript, Next.js, and Nest.js. I enjoy
          building fast, scalable, and reusable components, whether for the
          frontend or backend.
        </p>
        <Link href="/contact">
          <button>Reach out</button>
        </Link>
      </Container>
    </main>
  );
}
