"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Testimonials() {
  const pathname = usePathname();
  const testimonials = [
    {
      name: "Ritika S.",
      role: "Hair Fall Recovery",
      before: "/images/stages/female1-before.png",
      after: "/images/stages/female1-after.png",
      quote:
        "After years of trying shampoos and serums, Modern Clinic helped me find the real cause of my hair fall. My confidence is back!",
    },
    {
      name: "Karan M.",
      role: "Regrowth Program",
      before: "/images/stages/male4-before.png",
      after: "/images/stages/male4-after.png",
      quote:
        "In just 3 months, I saw baby hair and major improvement. Dr. Devendra’s holistic approach truly works.",
    },
    {
      name: "Simran K.",
      role: "Stress & Nutrition Therapy",
      before: "/images/stages/female2-before.png",
      after: "/images/stages/female2-after.png",
      quote:
        "Fixing my stress & sleep changed everything. My scalp feels healthier and shedding reduced drastically.",
    },
  ];

  const gallery = [
    {
      before: "/images/before-after/male3-before.png",
      after: "/images/before-after/male3-after.png",
    },
    {
      before: "/images/before-after/female1-before.png",
      after: "/images/before-after/female1-after.png",
    },
    {
      before: "/images/before-after/male1-before.png",
      after: "/images/before-after/male1-after.png",
    },
    {
      before: "/images/before-after/male2-before.png",
      after: "/images/before-after/male2-after.png",
    },
    {
      before: "/images/before-after/female2-before.png",
      after: "/images/before-after/female2-after.png",
    },
    {
      before: "/images/before-after/male4-before.png",
      after: "/images/before-after/male4-after.png",
    },
    {
      before: "/images/before-after/male5-before.png",
      after: "/images/before-after/male5-after.png",
    },
  ];

  const showGallery = pathname === "/testimonials";

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <main className="max-w-7xl mx-auto px-6">

        {/* ORIGINAL SUCCESS STORIES SECTION */}
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
              className="bg-white rounded-2xl shadow p-5 
              hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-24 h-24 rounded-xl overflow-hidden relative">
                  <Image src={t.before} alt="before" fill className="object-cover" />
                </div>
                <div className="w-24 h-24 rounded-xl overflow-hidden relative">
                  <Image src={t.after} alt="after" fill className="object-cover" />
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

        {/* NEW BEFORE/AFTER GALLERY SECTION */}
        {showGallery && (
          <>
            <h2 className="text-2xl font-bold text-center mt-16 mb-6">
              Before & After Transformations
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {gallery.map((g, i) => (
                <motion.div
                  key={i}
                  className="bg-white rounded-2xl shadow p-5 hover:shadow-xl hover:-translate-y-1 transition-all"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center justify-center gap-4">

                    {/* BEFORE */}
                    <div className="flex flex-col items-center">
                      <span className="text-xs text-gray-500 mb-1">BEFORE</span>
                      <div className="w-24 h-24 rounded-lg overflow-hidden relative shadow">
                        <Image src={g.before} alt="before" fill className="object-cover" />
                      </div>
                    </div>

                    {/* AFTER */}
                    <div className="flex flex-col items-center">
                      <span className="text-xs text-gray-500 mb-1">AFTER</span>
                      <div className="w-24 h-24 rounded-lg overflow-hidden relative shadow">
                        <Image src={g.after} alt="after" fill className="object-cover" />
                      </div>
                    </div>

                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}

      </main>
    </div>
  );
}
