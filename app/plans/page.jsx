"use client";

import { Suspense } from "react";
import PlansPage from "./plans-page";

export default function PlansWrapper() {
  return (
    <Suspense fallback={<div className="p-8">Loading...</div>}>
      <PlansPage />
    </Suspense>
  );
}
