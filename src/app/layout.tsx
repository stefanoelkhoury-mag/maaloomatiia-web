import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "maaloomatiia — The Practitioner Academy for Data & AI",
  description:
    "maaloomatiia delivers Data & AI capability building for banks, government bodies, and telecom operators across MENA, taught by the practitioners who build these systems in the field.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[var(--foreground)]">
        {children}
      </body>
    </html>
  );
}
