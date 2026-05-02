import type { Metadata } from "next";
import { DM_Sans, Source_Code_Pro } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-source-code",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Kathryn Le",
  description: "Kathryn Le's Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${sourceCodePro.variable}`}>
        {children}
      </body>
    </html>
  );
}
