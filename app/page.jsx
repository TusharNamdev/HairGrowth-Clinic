"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaUserMd, FaRegSmileBeam, FaLeaf, FaWeight } from "react-icons/fa";
import { MdHealthAndSafety, MdOutlineScience } from "react-icons/md";

export default function HomePage() {
    return (
        <div className="bg-background text-foreground">

            {/*  HERO SECTION */}
            <section className="py-20 px-6 md:px-16 lg:px-24">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* HERO TEXT */}
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                            Your Trusted Clinic for <span className="text-primary">Hair, Skin & Wellness</span> Care
                        </h1>
                        <p className="mt-4 text-muted-foreground text-lg">
                            Holistic, personalized, and medically advanced treatments backed by
                            qualified specialists — designed to heal you from the root.
                        </p>

                        <div className="mt-8 flex gap-4">
                            <button className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition">
                                Book Consultation
                            </button>

                            <button className="px-6 py-3 rounded-xl bg-secondary text-foreground border border-border hover:bg-secondary/80 transition">
                                View Treatments
                            </button>
                        </div>
                    </div>

                    {/* HERO IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="rounded-2xl overflow-hidden shadow-lg border border-border"
                    >
                        <Image
                            src="/images/hero.png"
                            width={600}
                            height={500}
                            alt="clinic"
                            className="object-cover w-full h-full"
                        />
                    </motion.div>
                </div>
            </section>

            {/* WHY CHOOSE US (4 CARDS) */}
            <section className="py-20 px-6 md:px-16 lg:px-24">
                <h2 className="text-3xl font-semibold text-center mb-12">
                    Why Choose Our Clinic
                </h2>

                <div className="grid md:grid-cols-4 gap-10">
                    {[
                        { icon: <FaUserMd size={26} className="text-background" />, title: "Certified Specialists" },
                        { icon: <MdOutlineScience size={26} className="text-background" />, title: "Science + Holistic Approach" },
                        { icon: <FaLeaf size={26} className="text-background" />, title: "Root-Cause Healing" },
                        { icon: <MdHealthAndSafety size={26} className="text-background" />, title: "Safe & Personalized" },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="
                group p-6 rounded-2xl bg-secondary/60 backdrop-blur-xl 
                shadow-lg hover:shadow-medium border border-border
                transition-all hover:-translate-y-1
              "
                        >
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md mb-5">
                                {item.icon}
                            </div>

                            <h4 className="font-semibold text-lg text-foreground text-center">{item.title}</h4>

                            <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-primary to-accent mx-auto mt-4 transition-all duration-500"></div>
                        </div>
                    ))}
                </div>
            </section>

            {/* OUR TREATMENTS (3 MAIN SERVICES) */}
            <section className="py-20 px-6 md:px-16 lg:px-24">
                <h2 className="text-3xl font-semibold text-center mb-12">
                    Our Specialized Treatments
                </h2>

                <div className="grid md:grid-cols-3 gap-10">
                    {[
                        {
                            title: "Hair Growth Treatments",
                            icon: <FaLeaf size={24} className="text-background" />,
                            link: "/HairGrowth"
                        },
                        {
                            title: "Skin Care & Glow Treatments",
                            icon: <FaRegSmileBeam size={24} className="text-background" />,
                            link: "/SkinCare"
                        },
                        {
                            title: "Weight Loss & Metabolism Programs",
                            icon: <FaWeight size={24} className="text-background" />,
                            link: "/WeightLoss"
                        }
                    ].map((item, index) => (
                        <a
                            href={item.link}
                            key={index}
                            className="
                group p-6 rounded-2xl bg-secondary/60 backdrop-blur-xl 
                border border-border shadow-lg hover:shadow-medium
                transition-all hover:-translate-y-1 block
              "
                        >
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md mb-5">
                                {item.icon}
                            </div>

                            <h4 className="font-semibold text-xl text-foreground">{item.title}</h4>

                            <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-primary to-accent mx-auto mt-5 transition-all duration-500"></div>
                        </a>
                    ))}
                </div>
            </section>

        </div>
    );
}
