"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
    {
        title: "Advanced Homeopathy for Hair Fall & Baldness",
        desc: "Clinically proven root-cause treatment with personalized care.",
        img: "/images/slider/hair.png",
    },
    {
        title: "Safe & Effective Skin Treatment",
        desc: "Psoriasis, eczema, acne & more — gentle and long-term results.",
        img: "/images/slider/skin.png",
    },
    {
        title: "Holistic Treatment for Weight Loss",
        desc: "Treating the person, not just the disease.",
        img: "/images/slider/weight.png",
    },
];

export default function CompactHeroSlider() {
    return (
        <section
            className="
        w-full  
        h-[48vh] md:h-[55vh]
        bg-gradient-to-br from-background to-secondary/20
        flex items-center mt-10
      "
        >
            {/* LEFT — PREMIUM CONTENT CARD */}
            <div className="w-full md:w-1/2 h-full flex items-center px-6 md:px-16 lg:px-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="
            bg-card/80 backdrop-blur-xl 
            border border-border 
            p-6 md:p-8 rounded-2xl shadow-sm 
            max-w-xl
          "
                >
                    <span className="text-sm tracking-wide text-primary font-medium">
                        Trusted Homeopathy Since 1995
                    </span>

                    <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mt-2">
                        Personalized Treatment for Hair, Skin & Chronic Conditions
                    </h2>

                    <p className="text-muted-foreground mt-4 max-w-md">
                        Our doctors create customized treatment plans based on your symptoms,
                        lifestyle & medical history.
                    </p>

                    <div className="flex gap-3 pt-6">
                        <button className="px-5 py-3 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition font-medium">
                            Book Consultation
                        </button>

                        <button className="px-5 py-3 rounded-xl border border-primary/40 text-primary hover:bg-primary/10 transition font-medium">
                            View Conditions
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* RIGHT — IMAGE SLIDER */}
            <div className="hidden md:flex w-1/2 h-full relative items-center justify-center">
                <div className="w-[92%] h-[92%] rounded-2xl overflow-hidden shadow-lg relative">

                    <Swiper
                        modules={[Autoplay, EffectFade, Navigation, Pagination]}
                        autoplay={{ delay: 3500 }}
                        effect="fade"
                        navigation
                        pagination={{ clickable: true }}
                        loop
                        className="w-full h-full"
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative w-full h-full">

                                    <Image
                                        src={slide.img}
                                        alt={slide.title}
                                        fill
                                        className="object-cover"
                                    />

                                    {/* FIXED OVERLAY */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-black/10 to-transparent" />

                                    {/* TEXT OVER IMAGE */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8 }}
                                        className="absolute left-0 top-0 bottom-0 flex flex-col justify-center px-10 md:px-14 lg:px-16 z-20"
                                    >
                                        <h2 className="text-xl md:text-2xl font-semibold text-white max-w-sm drop-shadow">
                                            {slide.title}
                                        </h2>

                                        <p className="text-white/90 mt-2 max-w-md text-sm md:text-base">
                                            {slide.desc}
                                        </p>
                                    </motion.div>
                                </div>
                            </SwiperSlide>
                        ))}


                    </Swiper>
                </div>
            </div>
        </section>
    );
}
