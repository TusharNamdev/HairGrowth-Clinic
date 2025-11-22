// app/case-studies/page.jsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { caseStudies } from "./case-data";
import { ArrowRight } from "lucide-react";

export default function CaseStudiesPage() {
    return (
        <div className=" bg-gradient-to-b from-background via-background-soft to-background-muted">
            <main className="max-w-7xl mx-auto px-6 py-10">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-foreground">Case Studies</h1>
                    <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
                        Real patient journeys — outcomes vary. Click a case to read the full story.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {caseStudies.map((c, i) => (
                        <motion.article
                            key={c.slug}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.45, delay: i * 0.04 }}
                            viewport={{ once: true }}
                            className="group rounded-2xl overflow-hidden bg-card/70 backdrop-blur-xl border border-border shadow-sm hover:shadow-md transition"
                        >
                            <div className="relative h-44 w-full">
                                <Image src={c.before} alt={c.title} fill className="object-cover" />
                                <div className="absolute left-4 bottom-4 bg-secondary/70 backdrop-blur rounded-full px-3 py-1 text-xs text-foreground">
                                    {c.condition} • {c.duration}
                                </div>
                            </div>

                            <div className="p-5">
                                <h3 className="text-lg font-semibold text-foreground">{c.title}</h3>
                                <p className="text-sm text-muted-foreground mt-2 line-clamp-3">{c.summary}</p>

                                <div className="mt-4 flex items-center justify-between">
                                    <Link
                                        href={`/case-studies/${c.slug}`}
                                        className="text-sm text-accent hover:underline flex items-center gap-2"
                                    >
                                        View full case <ArrowRight size={14} />
                                    </Link>


                                    <div className="text-sm text-muted-foreground">{c.age} yrs</div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-sm text-muted-foreground">
                        Want to share a success story?
                        <Link href="/contact" className="text-accent hover:underline">
                            Contact us
                        </Link>
                    </p>

                </div>
            </main>
        </div>
    );
}
