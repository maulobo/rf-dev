import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Menu from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        {/* <Menu /> */}
        {children}
      </body>
    </html>
  );
}
