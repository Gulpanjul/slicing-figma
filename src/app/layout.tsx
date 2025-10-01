import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gulpanjul Slicing Figma",
  description:
    "A collection of Figma slicing projects transformed into responsive web pages with clean and modern design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
