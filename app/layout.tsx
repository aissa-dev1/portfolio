import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navBar";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/themeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aissa Bedr | Full Stack Engineer",
  description:
    "Highly skilled Web Developer and Designer with over 3 years of experience.",
  openGraph: {
    title: "Aissa Bedr | Full Stack Engineer",
    locale: "en_US",
    type: "website",
    siteName: "Aissa Bedr",
    url: "https://aissabedr.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          <main className="mt-48">{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
