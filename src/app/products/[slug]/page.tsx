import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Ruler, Sparkles, ShieldCheck, Scissors, Layers } from "lucide-react";
import { products, getProductBySlug, getAllProductSlugs } from "@/data/products";
import type { Metadata } from "next";
import ProductDetailClient from "./ProductDetailClient";

/* ------------------------------------------------------------------ */
/*  Static generation helpers                                          */
/* ------------------------------------------------------------------ */

export function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };

  return {
    title: `${product.title} — ${product.category} | Miral Crafts`,
    description: product.description.slice(0, 160),
  };
}

/* ------------------------------------------------------------------ */
/*  Page component (Server Component)                                  */
/* ------------------------------------------------------------------ */

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return <ProductDetailClient product={product} />;
}
