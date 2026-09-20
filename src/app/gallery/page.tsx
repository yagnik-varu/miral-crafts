"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, X } from "lucide-react";

const galleryImages = [
  { src: "/images/crochet.jpg", alt: "Crochet blanket detail", title: "Cozy Textures", category: "Crochet", span: "md:col-span-8 md:row-span-2", mobileHeight: "h-[350px]" },
  { src: "/images/embroidery.jpg", alt: "Embroidery hoop art", title: "Botanical Hoop", category: "Embroidery", span: "md:col-span-4", mobileHeight: "h-[250px]" },
  { src: "/images/yarn.jpg", alt: "Yarn collection", title: "Natural Fibers", category: "Materials", span: "md:col-span-4", mobileHeight: "h-[300px]" },
  { src: "/images/custom.jpg", alt: "Custom Embroidery piece", title: "Custom Portrait", category: "Embroidery", span: "md:col-span-6", mobileHeight: "h-[200px]" },
  { src: "/images/macrame.jpg", alt: "Macrame wall hanging", title: "Bohemian Knots", category: "Macrame", span: "md:col-span-6", mobileHeight: "h-[350px]" },
  { src: "/images/knitting.jpg", alt: "Knitted sweater detail", title: "Chunky Cables", category: "Knitting", span: "md:col-span-4", mobileHeight: "h-[250px]" },
  { src: "/images/cross_stitch.jpg", alt: "Cross-stitch sampler", title: "Modern Stitches", category: "Cross Stitch", span: "md:col-span-4", mobileHeight: "h-[300px]" },
  { src: "/images/amigurumi.jpg", alt: "Amigurumi plush toy", title: "Little Friends", category: "Amigurumi", span: "md:col-span-4", mobileHeight: "h-[200px]" },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<{src: string, alt: string, title: string, category: string} | null>(null);

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

        <div className="columns-2 md:columns-none md:grid md:grid-cols-12 md:auto-rows-[300px] gap-4 md:gap-6 space-y-4 md:space-y-0">
          {galleryImages.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedImage(img)}
              className={`relative rounded-2xl md:rounded-[2rem] overflow-hidden group shadow-lg break-inside-avoid ${img.mobileHeight} md:h-auto ${img.span} cursor-pointer`}
            >
              <Image 
                src={img.src} 
                alt={img.alt} 
                fill 
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 text-white translate-y-0 md:translate-y-4 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="font-serif text-lg md:text-3xl drop-shadow-sm">{img.title}</p>
                <p className="text-[10px] md:text-sm/6 uppercase tracking-wider opacity-90">{img.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 p-6 md:p-12 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 md:top-10 md:right-10 text-white hover:text-terracotta transition-colors bg-white/10 p-3 rounded-full backdrop-blur-md z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
            
            {/* Image Container */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-6xl flex-1 min-h-0"
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src={selectedImage.src} 
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="100vw"
                quality={100}
              />
            </motion.div>

            {/* Text Details Below Image */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ delay: 0.1 }}
              className="w-full text-center mt-6 flex-shrink-0"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="font-serif text-3xl md:text-4xl text-white mb-2">{selectedImage.title}</h3>
              <p className="text-sm md:text-base uppercase tracking-widest text-white/60">{selectedImage.category}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
