import type { Metadata } from "next";
import {Jura} from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Date Proposal App",
  description: "A magical way to ask that special someone on a date!",
};

const JuraFont = Jura({subsets: ["latin"]});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${JuraFont.className} antialiased`}
        style={{ overscrollBehaviorX: "none" }}
      >
        {children}
      </body>
    </html>
  );
}
