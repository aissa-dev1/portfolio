import type { Metadata } from "next";

import "./globals.css";

import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Aissa Bedr: Full Stack Developer",
  description:
    "A self-taught developer with 3+ years of experience in web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
