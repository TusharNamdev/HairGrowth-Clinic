"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaSpa } from "react-icons/fa";

export default function SkinCareComingSoon() {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center px-6 py-20 text-center bg-background text-foreground">

      {/* Icon Bubble */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="
          w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent 
          flex items-center justify-center shadow-lg mb-6
        "
      >
        <FaSpa size={40} className="text-background" />
      </motion.div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Skin Care Treatments <span className="text-primary">Coming Soon</span>
      </h1>

      {/* Subtitle */}
      <p className="text-muted-foreground max-w-xl leading-relaxed">
        We are preparing highly specialized skin care solutions including acne treatment, glow enhancement, pigmentation healing, and anti-aging therapies.
      </p>

      {/* Accent Line */}
      <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-6"></div>

      {/* Coming Soon Badge */}
      <span className="mt-6 inline-block px-4 py-2 bg-secondary/60 backdrop-blur-lg border border-border rounded-xl text-sm shadow-md">
        Launching in a few weeks ✨
      </span>
    </div>
  );
}
