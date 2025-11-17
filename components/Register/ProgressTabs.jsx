"use client";

import React from "react";

export default function ProgressTabs({ step = 0 }) {
  const tabs = ["About You", "Hair Health", "Internal Health", "Scalp Assessment"];
  const percent = Math.round((step / (tabs.length - 1)) * 100);

  return (
    <div className="w-full">
      <div className="flex items-center gap-2">
        
        {/* Left Spacer */}
        <div className="flex-1 hidden md:block" />

        {/* Scrollable Tabs */}
        <div
          className="
            flex gap-3 
            overflow-x-auto 
            no-scrollbar 
            max-w-full 
            py-1
          "
        >
          {tabs.map((t, i) => (
            <div
              key={t}
              className={`
                px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap
                ${i <= step
                  ? "bg-emerald-200 text-gray-800"
                  : "bg-gray-100 text-gray-600"}
              `}
            >
              {t}
            </div>
          ))}
        </div>

        {/* Right: Percentage */}
        <div className="flex-1 text-right text-sm text-gray-600 hidden md:block">
          {percent}%
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mt-4 w-full">
        <div className="h-2 bg-gray-200 rounded-full">
          <div
            className="h-2 bg-emerald-300 rounded-full transition-all"
            style={{ width: `${percent}%` }}
          ></div>
        </div>
      </div>

      {/* Percent underneath on mobile */}
      <div className="md:hidden text-right text-xs text-gray-500 mt-1">
        {percent}%
      </div>
    </div>
  );
}
