import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

const proximaNova = localFont({
  src: [
    {
      path: "./assets/fonts/ProximaNova-Regular.otf",
      weight: "400",
    },
    {
      path: "./assets/fonts/ProximaNova-Bold.otf",
      weight: "700",
    },
    {
      path: "./assets/fonts/ProximaNova-ExtraBold.otf",
      weight: "800",
    },
  ],
  variable: "--font-proxima-nova",
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
      <body className={`${proximaNova.variable} antialiased`}>{children}</body>
    </html>
  );
}
