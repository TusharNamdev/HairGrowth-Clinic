"use client";
import { motion } from "framer-motion";

export default function VideoCard({ id, title }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, translateY: -4 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="
        bg-card/80 backdrop-blur-xl 
        border border-border rounded-2xl 
        shadow-[0_8px_24px_rgba(0,0,0,0.08)]
        hover:shadow-[0_12px_28px_rgba(0,0,0,0.14)]
        overflow-hidden
        max-w-md mx-auto
      "
    >
      {/* Video */}
      <div className="w-full aspect-video overflow-hidden rounded-b-xl">
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          title={title}
          className="w-full h-full rounded-b-xl"
          allowFullScreen
        />
      </div>

      {/* Title */}
      <div className="p-4">
        <h3 className="text-base md:text-lg font-semibold text-foreground leading-snug">
          {title}
        </h3>
      </div>
    </motion.div>
  );
}
