export interface Product {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
  description: string;
  materials: string[];
  technique: string;
  timeline: string;
  dimensions: string;
  careInstructions: string[];
  highlights: string[];
  // Gallery layout hints
  span: string;
  mobileHeight: string;
}

export const products: Product[] = [
  {
    id: "cozy-textures",
    title: "Cozy Textures",
    category: "Crochet",
    image: "/images/crochet.jpg",
    alt: "Crochet blanket detail",
    description:
      "A luxuriously soft throw blanket featuring an intricate bobble-stitch pattern inspired by rolling meadow fields. Each bobble is individually crafted to create a three-dimensional texture that invites you to curl up and unwind. The natural, undyed yarn preserves the warmth and character of the original fiber.",
    materials: [
      "100% Merino Wool Yarn (undyed)",
      "Bamboo Crochet Hook — 6mm",
      "Hand-spun accent thread",
    ],
    technique:
      "Hand-crocheted using a combination of bobble stitch and seed stitch, creating a textured surface with a rhythmic, organic pattern. Each row is carefully tensioned by hand to maintain consistent drape.",
    timeline: "3–4 weeks",
    dimensions: "130 cm × 180 cm",
    careInstructions: [
      "Hand wash in lukewarm water with a gentle wool detergent",
      "Do not wring — gently press out excess water",
      "Lay flat on a towel to dry, reshaping as needed",
      "Store folded in a breathable cotton bag",
    ],
    highlights: [
      "Over 12,000 individual bobble stitches",
      "Naturally hypoallergenic merino wool",
      "Temperature-regulating fiber for year-round comfort",
      "Each piece is one-of-a-kind",
    ],
    span: "md:col-span-8 md:row-span-2",
    mobileHeight: "h-[350px]",
  },
  {
    id: "botanical-hoop",
    title: "Botanical Hoop",
    category: "Embroidery",
    image: "/images/embroidery.jpg",
    alt: "Embroidery hoop art",
    description:
      "A delicate embroidery hoop capturing wildflowers in full bloom. Using a palette of soft greens, dusty pinks, and lavender threads, this piece brings a touch of the countryside into any room. The design is first sketched freehand on the fabric before each petal and leaf is painstakingly stitched.",
    materials: [
      "Irish Linen base fabric",
      "DMC 6-strand embroidery floss (12 colors)",
      "Beechwood embroidery hoop — 8 inch",
      "Seed beads for flower centers",
    ],
    technique:
      "Freehand embroidery combining satin stitch, French knots, and long-and-short stitch for realistic petal gradients. Finished with a woven back for a clean presentation.",
    timeline: "2–3 weeks",
    dimensions: "20 cm diameter hoop",
    careInstructions: [
      "Display away from direct sunlight to preserve thread color",
      "Dust gently with a soft brush",
      "Do not wash — spot clean with a damp cloth if needed",
      "Hang on a wall hook or display on a shelf stand",
    ],
    highlights: [
      "Freehand design — no two hoops are identical",
      "Over 15 distinct stitch techniques used",
      "Museum-quality Irish linen base",
      "Finished back for a polished, display-ready look",
    ],
    span: "md:col-span-4",
    mobileHeight: "h-[250px]",
  },
  {
    id: "natural-fibers",
    title: "Natural Fibers",
    category: "Materials",
    image: "/images/yarn.jpg",
    alt: "Yarn collection",
    description:
      "A curated collection of hand-dyed, sustainably sourced yarns that form the foundation of every piece. From silky alpaca to rustic jute, each skein is carefully selected for its texture, warmth, and ability to hold vibrant, long-lasting color through a natural dyeing process using plants and minerals.",
    materials: [
      "Alpaca fiber — ethically sourced from small farms",
      "Organic cotton — GOTS certified",
      "Recycled wool blends",
      "Plant-based dyes (indigo, madder root, turmeric)",
    ],
    technique:
      "Hand-dyed in small batches using a solar immersion method. Each skein is mordanted with alum for color fastness, then slowly steeped in natural dye baths over 2–3 days for deep, rich saturation.",
    timeline: "1–2 weeks per dye batch",
    dimensions: "Varies — 50g to 200g skeins",
    careInstructions: [
      "Hand wash separately in cool water on first use",
      "Use a pH-neutral detergent",
      "Avoid prolonged sun exposure when drying",
      "Natural dyes may develop a beautiful patina over time",
    ],
    highlights: [
      "Zero synthetic chemicals in the dyeing process",
      "Each colorway is unique and unrepeatable",
      "Sourced from small, ethical farms and cooperatives",
      "Biodegradable and compostable at end of life",
    ],
    span: "md:col-span-4",
    mobileHeight: "h-[300px]",
  },
  {
    id: "custom-portrait",
    title: "Custom Portrait",
    category: "Embroidery",
    image: "/images/custom.jpg",
    alt: "Custom Embroidery piece",
    description:
      "A bespoke embroidered portrait created from your favorite photograph. Every detail — from the curve of a smile to the glint in the eyes — is translated into thread with painstaking precision. This is a deeply personal piece, perfect as a gift or a timeless keepsake for your home.",
    materials: [
      "Premium cotton twill base fabric",
      "DMC and Anchor embroidery floss (25+ colors)",
      "Beechwood display hoop — 10 inch",
      "Archival backing board",
    ],
    technique:
      "Thread painting technique using single-strand long-and-short stitches layered to build realistic skin tones, textures, and shadows. The portrait is first mapped as a value study sketch before stitching begins.",
    timeline: "4–6 weeks",
    dimensions: "25 cm diameter hoop",
    careInstructions: [
      "Frame under glass for long-term preservation",
      "Keep away from humidity and direct sunlight",
      "Never machine wash — spot clean only if necessary",
      "Handle by the hoop frame, not the fabric surface",
    ],
    highlights: [
      "Created from your personal photo",
      "Up to 25 thread colors blended for lifelike detail",
      "Archival-quality materials for lasting preservation",
      "Comes with a certificate of authenticity",
    ],
    span: "md:col-span-6",
    mobileHeight: "h-[200px]",
  },
  {
    id: "bohemian-knots",
    title: "Bohemian Knots",
    category: "Macrame",
    image: "/images/macrame.jpg",
    alt: "Macrame wall hanging",
    description:
      "A large-scale macramé wall hanging that blends bohemian artistry with modern minimalism. Cascading fringes and geometric knot patterns create a striking focal point for any living space. The raw, natural cotton cord lends an organic warmth that softens even the most contemporary interiors.",
    materials: [
      "5mm single-twist natural cotton cord",
      "Sustainably harvested driftwood dowel",
      "Copper accent beads",
      "Raw brass hanging hardware",
    ],
    technique:
      "Hand-knotted using a combination of square knots, spiral knots, and gathering knots. The geometric diamond pattern is achieved through precise cord measurement and symmetrical knotting on both sides simultaneously.",
    timeline: "2–3 weeks",
    dimensions: "90 cm wide × 120 cm long (including fringe)",
    careInstructions: [
      "Shake gently or vacuum with upholstery attachment to remove dust",
      "Spot clean stains with a damp cloth and mild soap",
      "Steam lightly to refresh fibers if they flatten",
      "Avoid hanging in damp bathrooms to prevent mildew",
    ],
    highlights: [
      "Over 200 meters of cotton cord in each piece",
      "Sustainably sourced driftwood — each one unique",
      "Geometric precision hand-knotted without a loom",
      "Copper accents add a warm, metallic contrast",
    ],
    span: "md:col-span-6",
    mobileHeight: "h-[350px]",
  },
  {
    id: "chunky-cables",
    title: "Chunky Cables",
    category: "Knitting",
    image: "/images/knitting.jpg",
    alt: "Knitted sweater detail",
    description:
      "A statement knit featuring bold, sculptural cable patterns that twist and interlock across the surface. Knitted from a chunky-weight yarn, this piece has substantial weight and warmth, making it ideal as a cozy throw or oversized scarf. The cables are designed to evoke the texture of braided rope and ancient Celtic knotwork.",
    materials: [
      "Chunky-weight Peruvian Highland Wool",
      "Circular bamboo knitting needles — 10mm",
      "Cable needle — handmade olivewood",
    ],
    technique:
      "Hand-knitted using traditional cable needle technique. Complex 8-stitch cables are crossed every 6th row, with seed stitch panels between cables for contrast. The piece is knit flat and seamed with mattress stitch for invisible joins.",
    timeline: "2–3 weeks",
    dimensions: "50 cm × 180 cm (scarf) / Custom sizes available",
    careInstructions: [
      "Hand wash in cold water with wool-safe detergent",
      "Never hang to dry — lay flat to avoid stretching",
      "Store with cedar blocks to repel moths",
      "Gently steam to restore cable definition if flattened",
    ],
    highlights: [
      "Inspired by traditional Aran knitting patterns",
      "Ethically sourced Peruvian Highland wool",
      "Naturally water-resistant lanolin-rich fiber",
      "Can be customized in length and color",
    ],
    span: "md:col-span-4",
    mobileHeight: "h-[250px]",
  },
  {
    id: "modern-stitches",
    title: "Modern Stitches",
    category: "Cross Stitch",
    image: "/images/cross_stitch.jpg",
    alt: "Cross-stitch sampler",
    description:
      "A contemporary take on the classic cross-stitch sampler, featuring geometric patterns, playful motifs, and modern typography. This piece bridges tradition and trend — using the same counted-thread technique practiced for centuries, but with a fresh, graphic sensibility that feels right at home in a modern space.",
    materials: [
      "14-count Aida cloth — natural ecru",
      "DMC Mouliné stranded cotton (8 colors)",
      "Beechwood frame — custom milled",
      "Acid-free mounting board",
    ],
    technique:
      "Counted cross-stitch on Aida cloth, with each X formed by two diagonal stitches. The design is charted on graph paper first, then stitched row by row. Backstitch outlines are added last for crisp definition.",
    timeline: "2–4 weeks",
    dimensions: "20 cm × 25 cm (framed)",
    careInstructions: [
      "Display behind glass to protect from dust and moisture",
      "Avoid direct sunlight to prevent thread fading",
      "If unframed, hand wash gently in cool water",
      "Iron on reverse side with a pressing cloth",
    ],
    highlights: [
      "Over 8,000 individual cross-stitches",
      "Custom typography designed for each commission",
      "Acid-free framing for museum-quality preservation",
      "Perfect as a personalized gift or housewarming present",
    ],
    span: "md:col-span-4",
    mobileHeight: "h-[300px]",
  },
  {
    id: "little-friends",
    title: "Little Friends",
    category: "Amigurumi",
    image: "/images/amigurumi.jpg",
    alt: "Amigurumi plush toy",
    description:
      "Adorable hand-crocheted plush characters, each with their own personality and charm. From woodland creatures to whimsical fantasy beings, these amigurumi are crafted with safety-rated materials suitable for children. They make heartfelt gifts that can be treasured for years to come.",
    materials: [
      "100% OEKO-TEX certified cotton yarn",
      "Hypoallergenic polyester fiberfill",
      "Child-safe plastic safety eyes",
      "Embroidered facial details (for infant-safe versions)",
    ],
    technique:
      "Crocheted in continuous spiral rounds using a tight gauge to prevent stuffing from showing through. Each limb is crocheted separately and attached with invisible yarn joins. Facial features are embroidered or secured with locking safety eyes.",
    timeline: "1–2 weeks",
    dimensions: "15–25 cm tall (varies by character)",
    careInstructions: [
      "Surface wash with a damp cloth and mild soap",
      "Machine washable on delicate cycle in a mesh bag",
      "Air dry completely before giving to children",
      "Inspect safety eyes periodically for secure attachment",
    ],
    highlights: [
      "CE and CPSIA safety tested for ages 0+",
      "Can be customized with name and birth date",
      "OEKO-TEX certified — free from harmful substances",
      "Each character comes with a handwritten name tag",
    ],
    span: "md:col-span-4",
    mobileHeight: "h-[200px]",
  },
];

/**
 * Find a product by its slug/id.
 */
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.id === slug);
}

/**
 * Get all product slugs for static generation.
 */
export function getAllProductSlugs(): string[] {
  return products.map((p) => p.id);
}
