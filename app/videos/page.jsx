"use client";

import { useState } from "react";
import { videoList } from "./data";
import VideoCard from "./VideoCard";
import { ChevronDown } from "lucide-react";

export default function VideosPage() {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 6;


  const categories = ["All", ...new Set(videoList.map((v) => v.category))];

  const filteredVideos =
    filter === "All"
      ? videoList
      : videoList.filter((v) => v.category === filter);


  const totalPages = Math.ceil(filteredVideos.length / videosPerPage);

  const startIndex = (currentPage - 1) * videosPerPage;
  const currentVideos = filteredVideos.slice(startIndex, startIndex + videosPerPage);


  return (
    <section className="py-20 px-6 md:px-16 lg:px-24 bg-background min-h-screen">

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-foreground">
          Our <span className="text-primary">Video Library</span>
        </h2>
        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
          Expert guidance, health awareness, recovery stories, and treatment insights — all in one place.
        </p>
      </div>

      {/* FILTERS */}
      <div className="mb-12">

        {/* DESKTOP — horizontal scroll pills */}
        <div className="hidden md:flex overflow-x-auto no-scrollbar gap-3 py-2 justify-start px-4">

          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`
                px-5 py-2 rounded-full border whitespace-nowrap
                transition-all duration-200
                ${filter === cat
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-card border-border text-foreground hover:bg-secondary/60"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* MOBILE — dropdown */}
        <div className="md:hidden relative">
          <button
            onClick={() => setOpen(!open)}
            className="
              w-full px-4 py-3 rounded-xl 
              bg-card border border-border 
              flex items-center justify-between
              text-foreground
            "
          >
            <span>{filter || "Select Category"}</span>
            <ChevronDown className={`transition ${open ? "rotate-180" : ""}`} />
          </button>

          {open && (
            <div
              className="
    absolute mt-2 w-full z-20 
    bg-card rounded-xl border border-border 
    shadow-lg backdrop-blur-xl
    max-h-64 overflow-y-auto no-scrollbar
  "
            >

              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setFilter(cat);
                    setOpen(false);
                  }}
                  className="
                    w-full text-left px-4 py-3 
                    hover:bg-secondary/50 
                    transition text-foreground
                  "
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

      </div>


      {/* VIDEO GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {currentVideos.map((video, idx) => (
          <VideoCard key={idx} id={video.id} title={video.title} />
        ))}
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center gap-4 mt-12">

        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="
      px-5 py-2 rounded-lg border border-border
      bg-card text-foreground hover:bg-secondary/50
      disabled:opacity-40 disabled:cursor-not-allowed
    "
        >
          Previous
        </button>

        <div className="px-4 py-2 bg-secondary/40 rounded-lg border border-border">
          Page {currentPage} of {totalPages}
        </div>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="
      px-5 py-2 rounded-lg border border-border
      bg-card text-foreground hover:bg-secondary/50
      disabled:opacity-40 disabled:cursor-not-allowed
    "
        >
          Next
        </button>

      </div>


    </section>
  );
}
