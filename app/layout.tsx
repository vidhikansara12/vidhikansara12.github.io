import type { Metadata } from "next";

import { fontHeading, fontMono, fontSans } from "@/lib/fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: "Vidhi Kansara",
  description:
    "Software engineer building AI products that hold up when real people actually use them.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontHeading.variable} ${fontMono.variable}`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
