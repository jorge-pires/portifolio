import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono"
});

export const metadata: Metadata = {
  title: {
    default: "Jorge Pires | Frontend Developer",
    template: "%s | Jorge Pires"
  },
  description:
    "Portfólio de Jorge Alberto Pires Junior, Desenvolvedor Frontend Júnior com React, Next.js, TypeScript e Tailwind CSS.",
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Jorge Pires"
  ],
  openGraph: {
    title: "Jorge Pires | Frontend Developer",
    description:
      "Projetos frontend com foco em interfaces responsivas, acessíveis e bem estruturadas.",
    type: "website",
    locale: "pt_BR"
  },
  robots: { index: true, follow: true }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark"
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${geist.variable} ${geistMono.variable} bg-slate-950 text-slate-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
