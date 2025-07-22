// Localização: src/app/layout.tsx (ATUALIZADO)

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
// 1. REMOVA a importação do ThemeProvider
// import { ThemeProvider } from "@/contexts/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Projeto CID",
  description: "Robô monitorador de cultivos",
  icons: {
    icon: "/assets/Vector.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          {/* 2. REMOVA o <ThemeProvider> que envolve os {children} */}
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
