import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "../globals.css";
import { cx } from "@/lib/utils";
import Header from "@/components/Header"

const inter = Inter({ subsets: ["latin"], display: 'swap', variable: "--font-in" });
const manrope = Manrope({ subsets: ["latin"], display: "swap", variable: "--font-mr" });

export const metadata: Metadata = {
  title: "TechFuse",
  description: "< Tech blog />",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cx(inter.variable, manrope.variable, "font-mr bg-light dark:bg-dark")}>

        <Header />
        {children}
      </body>
    </html>
  );
}
