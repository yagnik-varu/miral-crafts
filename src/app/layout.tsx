import type { Metadata } from "next";
import { Cormorant, Public_Sans } from "next/font/google";
import Link from "next/link";
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
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${cormorant.variable} ${publicSans.variable} font-sans min-h-full flex flex-col antialiased`}>
        {/* Global Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-warm-cream/80 backdrop-blur-md border-b border-earthy-text/5 transition-all">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link href="/" className="font-serif text-2xl font-semibold tracking-wide text-earthy-text">Miral.</Link>
            <div className="hidden md:flex gap-8 text-sm font-medium text-muted-text">
              <Link href="/gallery" className="hover:text-terracotta transition-colors">Gallery</Link>
              <Link href="/#process" className="hover:text-terracotta transition-colors">Process</Link>
              <Link href="/#contact" className="hover:text-terracotta transition-colors">Contact</Link>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/gallery" className="md:hidden text-sm font-medium text-muted-text hover:text-terracotta">Gallery</Link>
              <Link 
                href="/#contact" 
                className="text-sm font-medium border border-terracotta text-terracotta px-4 py-2 md:px-5 md:py-2.5 rounded-full hover:bg-terracotta hover:text-white transition-all duration-300"
              >
                Commission Me
              </Link>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
