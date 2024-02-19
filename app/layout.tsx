import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ptBR } from "@clerk/localizations";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ['400', '500', '600', '700'],
    variable: '--font-poppins'
  });

export const metadata: Metadata = {
  title: "Brasilis Eventos",
  description: "A plataforma de eventos do colégio Brasilis",
  icons: {
    icon: '/assets/images/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider localization={ptBR}>
      <html lang="pt-BR">
        <body className={poppins.variable}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
