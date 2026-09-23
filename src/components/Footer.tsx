"use client";

import Link from "next/link";
import { MessageSquare, Mail } from "lucide-react";

export default function Footer() {
  const rawWhatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
  const cleanWhatsapp = rawWhatsapp.replace(/[^0-9]/g, "");
  const whatsappUrl = cleanWhatsapp ? `https://wa.me/${cleanWhatsapp}` : "#";

  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "";
  const emailUrl = contactEmail ? `mailto:${contactEmail}` : "#";

  const rawInstagram = process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE || "miral.crafts";
  const cleanInstagramHandle = rawInstagram
    .replace(/^https?:\/\/(www\.)?instagram\.com\//, "")
    .replace(/^@/, "")
    .replace(/\/$/, "");
  const instagramUrl = rawInstagram.startsWith("http")
    ? rawInstagram
    : `https://instagram.com/${cleanInstagramHandle}`;
  const instagramLabel = cleanInstagramHandle ? `@${cleanInstagramHandle}` : "@instagram";

  return (
    <footer id="contact" className="bg-earthy-text pt-24 pb-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-terracotta/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-24">
          <h2 className="font-serif text-5xl md:text-7xl text-warm-cream mb-8">Let&apos;s craft <br/><span className="text-terracotta italic">together.</span></h2>
          <p className="text-beige/70 text-lg mx-auto leading-relaxed mb-12">
            Have a specific project in mind? Or perhaps you just want to say hello? I&apos;m currently taking commissions for the upcoming season. Let&apos;s connect directly!
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 md:gap-6">
            <a 
              href={whatsappUrl} 
              target={cleanWhatsapp ? "_blank" : undefined}
              rel={cleanWhatsapp ? "noopener noreferrer" : undefined}
              className="flex items-center justify-center gap-3 bg-terracotta text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-earthy-text transition-all duration-300 shadow-xl shadow-terracotta/20 w-full sm:w-auto"
            >
              <MessageSquare size={20} />
              <span>Chat on WhatsApp</span>
            </a>

            <a 
              href={emailUrl}
              className="flex items-center justify-center gap-3 bg-white/5 text-warm-cream border border-warm-cream/20 px-8 py-4 rounded-full font-medium hover:bg-white hover:text-earthy-text transition-all duration-300 w-full sm:w-auto"
            >
              <Mail size={20} />
              <span>{contactEmail || "Email Us"}</span>
            </a>

            <a 
              href={instagramUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-white/5 text-warm-cream border border-warm-cream/20 px-8 py-4 rounded-full font-medium hover:bg-white hover:text-earthy-text transition-all duration-300 w-full sm:w-auto"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              <span>{instagramLabel}</span>
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-warm-cream/10 flex flex-col md:flex-row justify-between items-center gap-4 text-warm-cream/50 text-sm">
          <p>© {new Date().getFullYear()} Miral Crafts. All rights reserved.</p>
          <p>Designed thoughtfully in the studio.</p>
        </div>
      </div>
    </footer>
  );
}
