import type { Metadata } from "next";
import { Rozha_One, Quattrocento } from "next/font/google";
import "./globals.css";

const rozha_one = Rozha_One({
  variable: "--font-rozha-one",
  subsets: ["latin"],
  weight: ["400"],
});

const quattrocento = Quattrocento({
  variable: "--font-quattrocento",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "olivia lew",
  description: "lewsportfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rozha_one.variable} ${quattrocento.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
