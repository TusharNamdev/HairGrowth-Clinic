"use client";

import Image from "next/image";
import { Comparison, ComparisonItem, ComparisonHandle } from "@/components/ui/shadcn-io/comparison";

export default function BeforeAfterSlider({ before, after }) {
  return (
    <div className="relative w-full h-80 md:h-96 rounded-3xl overflow-hidden bg-muted">
      {/* Comparison Wrapper */}
      <Comparison className="relative h-full w-full">

        {/* AFTER Image */}
        <ComparisonItem position="left">
          <Image
            src={after}
            alt="After"
            fill
            className="object-cover"
          />
        </ComparisonItem>

        {/* BEFORE Image */}
        <ComparisonItem position="right">
          <Image
            src={before}
            alt="Before"
            fill
            className="object-cover"
          />
        </ComparisonItem>

        {/* DRAG HANDLE */}
        <ComparisonHandle>
          <div className="w-10 h-10 bg-card shadow-medium border border-border rounded-full flex items-center justify-center text-lg text-foreground">
            ↔
          </div>
        </ComparisonHandle>

      </Comparison>

      {/* LABELS */}
      <span className="absolute top-3 left-3 bg-primary/20 text-foreground text-xs px-3 py-1 rounded-md z-20">
        Before
      </span>

      <span className="absolute top-3 right-3 bg-accent/30 text-foreground text-xs px-3 py-1 rounded-md z-20">
        After
      </span>
    </div>
  );
}
