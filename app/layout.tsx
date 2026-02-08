import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Speck-Kit Demo - UI Component Library",
  description: "Demo application showcasing Speck-Kit, a lightweight UI component library for React",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
