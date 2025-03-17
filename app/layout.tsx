import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";

import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const proximaNova = localFont({
  src: [
    {
      path: "./assets/fonts/ProximaNova_Regular.ttf",
      weight: "400",
    },
    {
      path: "./assets/fonts/ProximaNova_Bold.otf",
      weight: "700",
    },
    {
      path: "./assets/fonts/ProximaNova_ExtraBold.otf",
      weight: "800",
    },
  ],
  variable: "--font-proxima-nova",
});

const gellix = localFont({
  src: [
    {
      path: "./assets/fonts/Gellix_ExtraBold.otf",
      weight: "800",
    },
  ],
  variable: "--font-gellix",
});

export const metadata: Metadata = {
  title: "Cinesercla | Home",
  description:
    "CINESERCLA é um dos mais tradicionais grupos de cinemas do Brasil e mantém uma política de crescimento, com qualidade e eficiência em todos os seus complexos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider attribute="class">
        <body
          className={`${proximaNova.variable} ${gellix.variable} antialiased bg-[#EAEAEA] dark:bg-[#0f1619] transition-colors duration-200 easy-in-out`}
        >
          <Navbar />
          {children}
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
