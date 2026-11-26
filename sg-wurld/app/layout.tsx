import type { Metadata } from "next";
import { Big_Shoulders_Display, Public_Sans } from "next/font/google";
import "./globals.css";

const display = Big_Shoulders_Display({ subsets: ["latin"], variable: "--font-display" });
const sans = Public_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "SG Wurld | Construction, solar, materials, real estate and more",
  description:
    "SG Wurld: architectural drawing, building construction, electrical and solar, plumbing, building materials, real estate, truck rental, event planning and car parts.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}
