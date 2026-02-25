import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BALALE TCHATCHOUA BENEL — Data Scientist & Ingénieur Humanités Numériques",
  description:
    "Portfolio professionnel de BALALE TCHATCHOUA BENEL, élève ingénieur à l'ENSPY (Polytechnique Yaoundé). Spécialiste Data Science, Machine Learning et protection des données (RGPD) pour l'économie numérique africaine.",
  keywords: [
    "Data Science",
    "Machine Learning",
    "RGPD",
    "Cameroun",
    "ENSPY",
    "Polytechnique Yaoundé",
    "Python",
    "React Native",
    "Power BI",
    "Humanités Numériques",
    "Afrique numérique",
  ],
  authors: [{ name: "BALALE TCHATCHOUA BENEL" }],
  creator: "BALALE TCHATCHOUA BENEL",
  openGraph: {
    title: "BALALE TCHATCHOUA BENEL — Data Scientist",
    description:
      "Transformer les données en décisions stratégiques pour l'économie numérique africaine.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
