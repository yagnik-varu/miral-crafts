"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { MessageSquare, Scissors, Package, Send } from "lucide-react";
import { useRef } from "react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <main className="min-h-screen bg-warm-cream selection:bg-terracotta selection:text-white overflow-hidden">


      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-20 px-6">
        <motion.div 
          className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
          style={{ y, opacity }}
        >
          <div className="absolute top-20 left-10 w-72 h-72 bg-terracotta/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-beige rounded-full blur-3xl" />
          
          {/* Animated Thread Container */}
          <motion.div
             className="absolute inset-0 w-full h-full text-terracotta/40"
             animate={{ y: [0, -15, 0], rotate: [0, 1, -1, 0] }}
             transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Desktop SVG */}
            <svg className="hidden md:block w-full h-full" viewBox="0 0 1400 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="thread-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="currentColor" stopOpacity="1" />
                  <stop offset="100%" stopColor="currentColor" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              
              {/* Solid Yarn with Drop Shadow */}
              <motion.path
                d="M-100 500 C 200 700, 300 100, 500 400 C 600 550, 400 650, 450 300 C 500 -50, 900 200, 850 550 C 800 900, 1100 600, 1500 300"
                stroke="url(#thread-grad)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 4.5, ease: "easeInOut", delay: 0.2 }}
                style={{ filter: 'drop-shadow(0px 8px 12px rgba(193, 124, 102, 0.3))' }}
              />
              
              {/* Dashed Stitches */}
              <motion.path
                d="M-50 200 C 300 -100, 500 800, 700 400 C 800 200, 1000 800, 1200 400 C 1300 200, 1400 600, 1500 500"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="12 12"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 5, ease: "easeOut", delay: 1 }}
              />

              {/* Decorative Knots at intersections */}
              <motion.circle
                cx="450" cy="300" r="4.5" fill="currentColor"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.9 }}
                transition={{ delay: 2.5, duration: 0.5, type: "spring" }}
              />
              <motion.circle
                cx="850" cy="550" r="4.5" fill="currentColor"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.9 }}
                transition={{ delay: 3.5, duration: 0.5, type: "spring" }}
              />
            </svg>

            {/* Mobile SVG */}
            <svg className="block md:hidden w-full h-full" viewBox="0 0 400 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="thread-grad-mobile" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="currentColor" stopOpacity="1" />
                  <stop offset="100%" stopColor="currentColor" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <motion.path
                d="M-50 200 C 150 400, 300 0, 350 300 C 400 600, 100 500, 200 700 C 300 900, 100 900, -50 900"
                stroke="url(#thread-grad-mobile)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 4.5, ease: "easeInOut", delay: 0.2 }}
                style={{ filter: 'drop-shadow(0px 8px 12px rgba(193, 124, 102, 0.3))' }}
              />
              <motion.path
                d="M 450 100 C 200 50, 0 300, 150 500 C 300 700, 100 800, -50 850"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="12 12"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 5, ease: "easeOut", delay: 1 }}
              />
              <motion.circle
                cx="250" cy="300" r="4.5" fill="currentColor"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.9 }}
                transition={{ delay: 2.5, duration: 0.5, type: "spring" }}
              />
            </svg>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-5xl mx-auto text-center"
        >
          <motion.div variants={fadeInUp} className="mb-6 flex justify-center">
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-terracotta bg-terracotta/10 px-4 py-1.5 rounded-full">
              Handmade Crochet & Embroidery
            </span>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="font-serif text-6xl md:text-8xl mb-8 leading-[1.1] text-earthy-text font-semibold drop-shadow-sm">
            Crafted with Love, <br className="hidden md:block" />
            <span className="italic text-terracotta">Thread by Thread.</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg md:text-2xl text-earthy-text/90 mb-12 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-sm">
            Bespoke artwork for your home and lifestyle. Made slowly, beautifully, and exclusively for you.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link 
              href="/gallery" 
              className="inline-flex items-center gap-2 bg-earthy-text text-white px-8 py-4 rounded-full font-medium hover:bg-terracotta transition-all duration-300 shadow-xl shadow-earthy-text/10 group"
            >
              Explore Collection
              <span className="group-hover:translate-y-1 transition-transform">↓</span>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Work (Gallery) */}
      <section id="gallery" className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
          >
            <div>
              <h2 className="font-serif text-5xl md:text-6xl text-earthy-text mb-4">Selected Works</h2>
              <p className="text-muted-text text-lg max-w-md">A glimpse into recent bespoke pieces, balancing traditional techniques with modern aesthetics.</p>
            </div>
            <Link href="#contact" className="text-terracotta font-medium hover:underline underline-offset-4">
              See more on Instagram →
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-6">
            <motion.div 
              whileHover={{ y: -10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="col-span-2 md:col-span-7 h-[45vh] md:h-[60vh] relative rounded-[2rem] overflow-hidden group shadow-lg"
            >
              <Image src="/images/crochet.jpg" alt="Crochet blanket detail" fill sizes="(max-width: 768px) 100vw, 60vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 text-white translate-y-0 md:translate-y-4 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="font-serif text-2xl md:text-3xl drop-shadow-sm">Cozy Textures</p>
                <p className="text-xs md:text-sm/6 uppercase tracking-wider opacity-90">Crochet</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="col-span-1 md:col-span-5 h-[30vh] md:h-[60vh] relative rounded-[2rem] overflow-hidden group shadow-lg"
            >
              <Image src="/images/embroidery.jpg" alt="Embroidery hoop art" fill sizes="(max-width: 768px) 50vw, 40vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 text-white translate-y-0 md:translate-y-4 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="font-serif text-xl md:text-3xl drop-shadow-sm">Botanical Hoop</p>
                <p className="text-[10px] md:text-sm/6 uppercase tracking-wider opacity-90">Embroidery</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="col-span-1 md:col-span-5 h-[35vh] md:h-[60vh] mt-8 md:mt-0 relative rounded-[2rem] overflow-hidden group shadow-lg"
            >
              <Image src="/images/yarn.jpg" alt="Yarn collection" fill sizes="(max-width: 768px) 50vw, 40vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 text-white translate-y-0 md:translate-y-4 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="font-serif text-xl md:text-3xl drop-shadow-sm">Natural Fibers</p>
                <p className="text-[10px] md:text-sm/6 uppercase tracking-wider opacity-90">Materials</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="col-span-2 md:col-span-7 h-[40vh] md:h-[60vh] relative rounded-[2rem] overflow-hidden group shadow-lg"
            >
              <Image src="/images/custom.jpg" alt="Custom Embroidery piece" fill sizes="(max-width: 768px) 100vw, 60vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 text-white translate-y-0 md:translate-y-4 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="font-serif text-2xl md:text-3xl drop-shadow-sm">Custom Portrait</p>
                <p className="text-xs md:text-sm/6 uppercase tracking-wider opacity-90">Embroidery</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Process */}
      <section id="process" className="py-32 bg-beige relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl md:text-6xl text-earthy-text mb-6">How It Works</h2>
            <p className="text-lg text-muted-text max-w-xl mx-auto">From an initial spark of an idea to the final stitch, bringing your vision to life is a collaborative and beautiful process.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: MessageSquare,
                title: "1. Vision",
                desc: "We discuss colors, dimensions, and feelings. I translate your ideas into a moodboard and initial sketch."
              },
              {
                icon: Scissors,
                title: "2. Creation",
                desc: "I source premium, sustainable yarns and threads, meticulously crafting your piece by hand over days or weeks."
              },
              {
                icon: Package,
                title: "3. Delivery",
                desc: "Your bespoke item is carefully washed, beautifully packaged, and safely shipped to its new home."
              }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-warm-cream p-10 rounded-[2rem] hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-terracotta/5 rounded-bl-full transition-transform duration-500 group-hover:scale-150" />
                <div className="w-16 h-16 bg-white shadow-sm text-terracotta rounded-full flex items-center justify-center mb-8 relative z-10 group-hover:bg-terracotta group-hover:text-white transition-colors duration-300">
                  <step.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-3xl mb-4 text-earthy-text relative z-10">{step.title}</h3>
                <p className="text-muted-text leading-relaxed relative z-10">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="bg-earthy-text pt-24 pb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-terracotta/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/2 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-24">
            <h2 className="font-serif text-5xl md:text-7xl text-warm-cream mb-8">Let's craft <br/><span className="text-terracotta italic">together.</span></h2>
            <p className="text-beige/70 text-lg mx-auto leading-relaxed mb-12">
              Have a specific project in mind? Or perhaps you just want to say hello? I'm currently taking commissions for the upcoming season. Let's connect directly!
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="#" className="flex items-center justify-center gap-3 bg-terracotta text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-earthy-text transition-all duration-300 shadow-xl shadow-terracotta/20 w-full sm:w-auto">
                <MessageSquare size={20} />
                <span>Chat on WhatsApp</span>
              </a>
              <a href="#" className="flex items-center justify-center gap-3 bg-white/5 text-warm-cream border border-warm-cream/20 px-8 py-4 rounded-full font-medium hover:bg-white hover:text-earthy-text transition-all duration-300 w-full sm:w-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                <span>@miral.crafts</span>
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-warm-cream/10 flex flex-col md:flex-row justify-between items-center gap-4 text-warm-cream/50 text-sm">
            <p>© {new Date().getFullYear()} Miral Crafts. All rights reserved.</p>
            <p>Designed thoughtfully in the studio.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
