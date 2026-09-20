"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const galleryImages = [
  { src: "/images/crochet.jpg", alt: "Crochet blanket detail", title: "Cozy Textures", category: "Crochet", span: "md:col-span-8 md:row-span-2" },
  { src: "/images/embroidery.jpg", alt: "Embroidery hoop art", title: "Botanical Hoop", category: "Embroidery", span: "md:col-span-4" },
  { src: "/images/yarn.jpg", alt: "Yarn collection", title: "Natural Fibers", category: "Materials", span: "md:col-span-4" },
  { src: "/images/custom.jpg", alt: "Custom Embroidery piece", title: "Custom Portrait", category: "Embroidery", span: "md:col-span-6" },
  { src: "/images/macrame.jpg", alt: "Macrame wall hanging", title: "Bohemian Knots", category: "Macrame", span: "md:col-span-6" },
  { src: "/images/knitting.jpg", alt: "Knitted sweater detail", title: "Chunky Cables", category: "Knitting", span: "md:col-span-4" },
  { src: "/images/cross_stitch.jpg", alt: "Cross-stitch sampler", title: "Modern Stitches", category: "Cross Stitch", span: "md:col-span-4" },
  { src: "/images/amigurumi.jpg", alt: "Amigurumi plush toy", title: "Little Friends", category: "Amigurumi", span: "md:col-span-4" },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-warm-cream selection:bg-terracotta selection:text-white pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-muted-text hover:text-terracotta transition-colors mb-12"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>
        
        <div className="mb-16">
          <h1 className="font-serif text-6xl md:text-7xl text-earthy-text mb-6">Full Gallery</h1>
          <p className="text-xl text-muted-text max-w-2xl font-light">
            An extensive collection of my handmade pieces. Each item is crafted with patience, love, and the finest natural materials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[300px] gap-6">
          {galleryImages.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className={`relative rounded-[2rem] overflow-hidden group shadow-lg ${img.span}`}
            >
              <Image 
                src={img.src} 
                alt={img.alt} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-8 left-8 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="font-serif text-3xl">{img.title}</p>
                <p className="text-sm/6 uppercase tracking-wider opacity-80">{img.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
