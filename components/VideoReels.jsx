"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function VideoReels() {
  const videos = [
    "https://www.youtube.com/embed/i68ljuyMjbk",
    "https://www.youtube.com/embed/8k-CD4lztEM",
    "https://www.youtube.com/embed/U1-4SOKMxJs",
    "https://www.youtube.com/embed/bdvpof0PtDA",
    "https://www.youtube.com/embed/AUBAwNpiB5Q",
    "https://www.youtube.com/embed/NVYv-fICFEY",
    "https://www.youtube.com/embed/5aIAQUhPS2M",
    "https://www.youtube.com/embed/P8LMW9FOIIU",
    "https://www.youtube.com/embed/J7MSFHKSiB4",
    "https://www.youtube.com/embed/dOktKNstcE4",
    "https://www.youtube.com/embed/K9HxeFSyk40",
    "https://www.youtube.com/embed/KMlQbpd6T2c",
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold text-center mb-8">
        Real People. Real Stories.
      </h2>

      <div className="relative">


        {/* LEFT ARROW */}
        <div
          className="
            swiper-button-prev 
            !left-0 
            !z-20 
            !w-12 !h-12
            !rounded-full 
            !shadow-xl 
            !text-black 
            !flex !items-center !justify-center
            after:!text-3xl
          "
        ></div>


        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          spaceBetween={14}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.2 },
            1400: { slidesPerView: 4.2 },
          }}
          className="py-4"
        >
          {videos.map((src, i) => (
            <SwiperSlide key={i}>
              <div className="w-full max-w-[350px] h-[200px] rounded-xl overflow-hidden shadow-lg bg-black mx-auto">
                <iframe
                  className="w-full h-full"
                  src={`${src}?rel=0`}
                  title={`video-${i}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>


        {/* RIGHT ARROW */}
        <div
          className="
            swiper-button-next 
            !right-0 
            !z-20 
            !w-12 !h-12
            !rounded-full 
            !shadow-xl 
            !text-black 
            !flex !items-center !justify-center
            after:!text-3xl
          "
        ></div>


      </div>
    </section>
  );
}









// "https://www.youtube.com/embed/i68ljuyMjbk",
//     "https://www.youtube.com/embed/8k-CD4lztEM",
//     "https://www.youtube.com/embed/U1-4SOKMxJs",
//     "https://www.youtube.com/embed/bdvpof0PtDA",
//     "https://www.youtube.com/embed/AUBAwNpiB5Q",
//     "https://www.youtube.com/embed/NVYv-fICFEY",
//     "https://www.youtube.com/embed/5aIAQUhPS2M",
//     "https://www.youtube.com/embed/P8LMW9FOIIU",
//     "https://www.youtube.com/embed/J7MSFHKSiB4",
//     "https://www.youtube.com/embed/dOktKNstcE4",
//     "https://www.youtube.com/embed/K9HxeFSyk40",
//     "https://www.youtube.com/embed/KMlQbpd6T2c",