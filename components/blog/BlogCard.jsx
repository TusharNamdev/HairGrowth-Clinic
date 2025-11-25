"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BlogCard({ post }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="
          block rounded-2xl overflow-hidden 
          bg-card/70 backdrop-blur-xl 
          border border-border shadow-sm hover:shadow-md
          transition-all duration-300 hover:-translate-y-1
        "
      >
        {/* Image */}
        <div className="relative w-full h-48">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-center justify-between">
            <span className="text-xs text-primary font-medium">{post.category}</span>
            <span className="text-xs text-muted-foreground">{post.date}</span>
          </div>

          <h3 className="mt-2 text-lg font-semibold text-foreground leading-snug">
            {post.title}
          </h3>

          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
            {post.excerpt}
          </p>

          <div className="mt-4 text-primary text-sm font-medium">Read more →</div>
        </div>
      </Link>
    </motion.div>
  );
}
