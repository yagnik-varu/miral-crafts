"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  ArrowLeft,
  Clock,
  Ruler,
  Sparkles,
  ShieldCheck,
  Scissors,
  Layers,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import type { Product } from "@/data/products";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function ProductDetailClient({ product }: { product: Product }) {
  return (
    <main className="min-h-screen bg-warm-cream selection:bg-terracotta selection:text-white">
      {/* ──────────────── Hero ──────────────── */}
      <section className="relative h-[55vh] md:h-[70vh] overflow-hidden">
        <Image
          src={product.image}
          alt={product.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />

        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute top-28 left-6 md:left-12 z-10"
        >
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm"
          >
            <ArrowLeft size={16} />
            Back to Gallery
          </Link>
        </motion.div>

        {/* Hero text */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-7xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-block text-xs uppercase tracking-[0.25em] font-semibold text-terracotta bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full mb-4"
            >
              {product.category}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-semibold drop-shadow-lg"
            >
              {product.title}
            </motion.h1>
          </div>
        </div>
      </section>

      {/* ──────────────── Content ──────────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
          {/* Left column — Description + Highlights */}
          <div className="lg:col-span-3 space-y-12">
            {/* Description */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
            >
              <h2 className="font-serif text-3xl md:text-4xl text-earthy-text mb-6">
                About This Piece
              </h2>
              <p className="text-muted-text text-lg leading-relaxed">
                {product.description}
              </p>
            </motion.div>

            {/* Technique */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="bg-beige rounded-3xl p-8 md:p-10"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-terracotta shadow-sm">
                  <Scissors size={20} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl text-earthy-text">
                  Crafting Technique
                </h3>
              </div>
              <p className="text-muted-text leading-relaxed">
                {product.technique}
              </p>
            </motion.div>

            {/* Highlights */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-terracotta/10 rounded-full flex items-center justify-center text-terracotta">
                  <Sparkles size={20} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl text-earthy-text">
                  What Makes It Special
                </h3>
              </div>
              <ul className="space-y-4">
                {product.highlights.map((highlight, i) => (
                  <motion.li
                    key={i}
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i * 0.5}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={20}
                      className="text-terracotta mt-0.5 flex-shrink-0"
                      strokeWidth={1.5}
                    />
                    <span className="text-muted-text leading-relaxed">
                      {highlight}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right column — Details sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick facts */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              className="bg-white rounded-3xl p-8 shadow-sm border border-earthy-text/5 space-y-6"
            >
              <h3 className="font-serif text-2xl text-earthy-text">
                Quick Details
              </h3>

              {/* Timeline */}
              <div className="flex items-start gap-4 pb-5 border-b border-earthy-text/5">
                <div className="w-10 h-10 bg-beige rounded-full flex items-center justify-center text-terracotta flex-shrink-0">
                  <Clock size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-text/60 mb-1">
                    Timeline
                  </p>
                  <p className="text-earthy-text font-medium">
                    {product.timeline}
                  </p>
                </div>
              </div>

              {/* Dimensions */}
              <div className="flex items-start gap-4 pb-5 border-b border-earthy-text/5">
                <div className="w-10 h-10 bg-beige rounded-full flex items-center justify-center text-terracotta flex-shrink-0">
                  <Ruler size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-text/60 mb-1">
                    Dimensions
                  </p>
                  <p className="text-earthy-text font-medium">
                    {product.dimensions}
                  </p>
                </div>
              </div>

              {/* Category */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-beige rounded-full flex items-center justify-center text-terracotta flex-shrink-0">
                  <Layers size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-text/60 mb-1">
                    Category
                  </p>
                  <p className="text-earthy-text font-medium">
                    {product.category}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Materials */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="bg-white rounded-3xl p-8 shadow-sm border border-earthy-text/5"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-beige rounded-full flex items-center justify-center text-terracotta">
                  <Layers size={18} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl text-earthy-text">
                  Materials Used
                </h3>
              </div>
              <ul className="space-y-3">
                {product.materials.map((material, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ChevronRight
                      size={16}
                      className="text-terracotta mt-1 flex-shrink-0"
                    />
                    <span className="text-muted-text text-sm leading-relaxed">
                      {material}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Care Instructions */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              className="bg-white rounded-3xl p-8 shadow-sm border border-earthy-text/5"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-beige rounded-full flex items-center justify-center text-terracotta">
                  <ShieldCheck size={18} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl text-earthy-text">
                  Care Instructions
                </h3>
              </div>
              <ul className="space-y-3">
                {product.careInstructions.map((instruction, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 bg-terracotta/10 text-terracotta rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-muted-text text-sm leading-relaxed">
                      {instruction}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
            >
              <Link
                href="/#contact"
                className="flex items-center justify-center gap-3 w-full bg-earthy-text text-white px-8 py-4 rounded-full font-medium hover:bg-terracotta transition-all duration-300 shadow-xl shadow-earthy-text/10 group"
              >
                Commission a Similar Piece
                <ChevronRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
