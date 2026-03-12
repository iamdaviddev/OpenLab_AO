import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "OpenLab",
  description: "O openLab é uma plataforma open-source dedicada a estudantes de engenharia que buscam documentar e compartilhar seu conhecimento técnico. O projeto resolve a lacuna entre a teoria da sala de aula e a prática da documentação científica, permitindo que futuros engenheiros publiquem artigos, revisem projetos de colegas e construam um portfólio sólido antes mesmo da graduação. Desenvolvido com foco em segurança e colaboração, o sistema conta com autenticação robusta e rotas protegidas para garantir a integridade intelectual de cada autor",
};

import AuthProviderWrapper from "../components/AuthProviderWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {/* AuthProviderWrapper é um componente client que injeta o contexto */}
        <AuthProviderWrapper>
          {children}
        </AuthProviderWrapper>
      </body>
    </html>
  );
}
