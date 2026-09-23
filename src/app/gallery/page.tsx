"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { products } from "@/data/products";

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

        <div className="columns-2 md:columns-none md:grid md:grid-cols-12 md:auto-rows-[300px] gap-4 md:gap-6 space-y-4 md:space-y-0">
          {products.map((product, i) => (
            <Link key={product.id} href={`/products/${product.id}`} className="contents">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className={`relative rounded-2xl md:rounded-[2rem] overflow-hidden group shadow-lg break-inside-avoid ${product.mobileHeight} md:h-auto ${product.span} cursor-pointer`}
              >
                <Image 
                  src={product.image} 
                  alt={product.alt} 
                  fill 
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 text-white translate-y-0 md:translate-y-4 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="font-serif text-lg md:text-3xl drop-shadow-sm">{product.title}</p>
                  <p className="text-[10px] md:text-sm/6 uppercase tracking-wider opacity-90">{product.category}</p>
                  <span className="inline-flex items-center gap-1 text-xs mt-2 opacity-80 group-hover:opacity-100 transition-opacity">
                    View Details →
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
