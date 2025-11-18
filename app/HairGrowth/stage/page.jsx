"use client";

import { Suspense } from "react";
import StageInner from "./stage-inner";

export default function StagePage() {
  return (
    <Suspense fallback={<div className="p-12">Loading...</div>}>
      <StageInner />
    </Suspense>
  );
}
