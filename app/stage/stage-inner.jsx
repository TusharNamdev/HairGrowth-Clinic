"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const stageImages = {
  male: ["/images/stages/male-1.svg", "/images/stages/male-2.svg", "/images/stages/male-3.svg"],
  female: ["/images/stages/female-1.svg", "/images/stages/female-2.svg", "/images/stages/female-3.svg"],
  other: ["/images/stages/other-1.svg", "/images/stages/other-2.svg", "/images/stages/other-3.svg"],
};

export default function Stage() {
  const params = useSearchParams();
  const [data, setData] = useState(null);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const obj = Object.fromEntries(params.entries());
    setData(obj);
  }, [params]);

  if (!data) return <div className="p-12">Loading...</div>;

  const gender = data.gender || "male";
  const imgs = stageImages[gender];

  function goPlans() {
    const qs = new URLSearchParams({ ...data, stage: selected }).toString();
    window.location.href = `/plans?${qs}`;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <main className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-bold">Choose Your Hair Loss Stage</h2>
        <p className="text-gray-600 mt-2">Helps us identify severity so the doctor can personalise your treatment.</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {imgs.map((src, idx) => (
            <div
              key={src}
              onClick={() => setSelected(idx)}
              className={`cursor-pointer bg-white rounded-2xl overflow-hidden shadow ${
                selected === idx ? "ring-4 ring-emerald-200" : ""
              }`}
            >
              <div className="aspect-[4/3] relative">
                <Image src={src} alt={`stage-${idx + 1}`} fill style={{ objectFit: "cover" }} />
              </div>
              <div className="p-4">
                <h4 className="font-semibold">Stage {idx + 1}</h4>
                <p className="text-sm text-gray-500 mt-1">
                  {idx === 0 ? "Early Hair Fall" : idx === 1 ? "Thinning / Moderate" : "Visible Scalp / Severe"}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-end">
          <Button onClick={goPlans}>See Plans</Button>
        </div>
      </main>
    </div>
  );
}
