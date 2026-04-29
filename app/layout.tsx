import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QueuePing Beta",
  description:
    "QueuePing watches locally and alerts your phone when your game needs you back.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
