// app/google-reviews/page.jsx
"use client";

import { motion } from "framer-motion";
import { googleReviews } from "./reviews-data";
import { Star, User } from "lucide-react";
import Link from "next/link";

export default function GoogleReviewsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-background via-background-soft to-background-muted">
            <main className="max-w-7xl mx-auto px-6 py-10">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-foreground"><span className="text-primary">Google</span> Reviews</h1>
                    <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
                        Verified patient reviews from our clinic. Outcomes and experiences vary.
                    </p>
                </div>

                {/* Auto-scroll carousel strip */}
                <div className="mb-8 overflow-hidden">
                    <motion.div
                        className="flex gap-4"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    >
                        {googleReviews.concat(googleReviews).map((r, i) => (
                            <div key={i} className="flex items-center gap-4 bg-card/60 border border-border rounded-xl px-4 py-3 mr-4 min-w-[300px]">
                                <div className="w-12 h-12 rounded-full bg-secondary/40 flex items-center justify-center text-foreground">
                                    <User size={20} />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <div className="font-semibold text-foreground">{r.name}</div>
                                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                            <Star size={14} className="text-primary" /> {r.rating}
                                        </div>
                                    </div>
                                    <div className="text-sm text-muted-foreground">{r.text}</div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Grid of reviews */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {googleReviews.map((r, i) => (
                        <motion.article
                            key={r.id}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.45, delay: i * 0.04 }}
                            className="p-6 rounded-2xl bg-card/70 backdrop-blur-xl border border-border shadow-sm"
                        >
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-secondary/40 flex items-center justify-center">
                                        <User size={16} />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-foreground">{r.name}</div>
                                        <div className="text-xs text-muted-foreground">{r.condition} • {r.date}</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-1 text-sm">
                                    <Star size={14} className="text-primary" />
                                    <span className="font-semibold">{r.rating}</span>
                                </div>
                            </div>

                            <p className="text-sm text-muted-foreground leading-relaxed">{r.text}</p>

                            <div className="mt-4 flex items-center justify-between">
                                <div className="text-xs text-muted-foreground">{r.verified ? "Verified patient" : "Unverified"}</div>
                                <Link href="/contact" className="text-sm text-accent hover:underline">
                                    Share your review
                                </Link>

                            </div>
                        </motion.article>
                    ))}
                </div>
            </main>
        </div>
    );
}
