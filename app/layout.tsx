import type { Metadata } from "next";
import { Sora, Space_Grotesk, Roboto } from "next/font/google";
import "./globals.css";

const soraFont = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: "variable"
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: "400"
});

const spaceGroteskFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: "variable"
});


export const metadata: Metadata = {
  title: "AI landing page",
  description: "Created by time variance in space",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${soraFont.variable} ${spaceGroteskFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
