"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ritika S.",
      role: "Hair Fall Recovery",
      before: "/images/stages/female-1.svg",
      after: "/images/stages/female-3.svg",
      quote: "After years of trying shampoos and serums, Modern Clinic helped me find the real cause of my hair fall. My confidence is back!",
    },
    {
      name: "Karan M.",
      role: "Regrowth Program",
      before: "/images/stages/male-2.svg",
      after: "/images/stages/male-3.svg",
      quote: "In just 3 months, I saw baby hair and major improvement. Dr. Devendra’s holistic approach truly works.",
    },
    {
      name: "Simran K.",
      role: "Stress & Nutrition Therapy",
      before: "/images/stages/female-1.svg",
      after: "/images/stages/female-3.svg",
      quote: "Fixing my stress & sleep changed everything. My scalp feels healthier and shedding reduced drastically.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <main className="max-w-6xl mx-auto px-6">
        
        <h2 className="text-3xl font-bold text-center mb-2">Success Stories</h2>
        <p className="text-gray-600 text-center mb-10">
          Real transformations from people who healed their hair naturally with our program.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow p-5"
            >
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-24 h-24 rounded-xl overflow-hidden relative">
                  <Image src={t.before} alt="before" fill style={{ objectFit: "cover" }} />
                </div>
                <div className="w-24 h-24 rounded-xl overflow-hidden relative">
                  <Image src={t.after} alt="after" fill style={{ objectFit: "cover" }} />
                </div>
              </div>

              <p className="italic text-gray-700 text-sm">“{t.quote}”</p>

              <div className="mt-4">
                <p className="font-semibold">{t.name}</p>
                <p className="text-xs text-gray-500">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
