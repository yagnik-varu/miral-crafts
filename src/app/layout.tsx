import type { Metadata } from "next";
import { Cormorant, Public_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant({ 
  subsets: ["latin"], 
  variable: "--font-cormorant",
  display: "swap",
});

const publicSans = Public_Sans({ 
  subsets: ["latin"], 
  variable: "--font-public-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Miral Crafts | Handmade Crochet & Embroidery",
  description: "Bespoke crochet and custom embroidery, made slowly and beautifully.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${cormorant.variable} ${publicSans.variable} font-sans min-h-full flex flex-col antialiased`}>
        {children}
      </body>
    </html>
  );
}
