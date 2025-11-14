"use client";

import React from "react";

export default function ProgressTabs({ step = 0 }) {
  const tabs = ["About You", "Hair Health", "Internal Health", "Scalp Assessment"];
  const percent = Math.round(((step) / (tabs.length - 1)) * 100);

  return (
    <div>
      <div className="flex items-center gap-4">
        {/* left previous placeholder */}
        <div className="flex-1" />

        <div className="flex gap-3">
          {tabs.map((t, i) => (
            <div
              key={t}
              className={`px-4 py-3 rounded-lg text-sm font-medium ${i <= step ? "bg-emerald-200 text-gray-800" : "bg-gray-100 text-gray-600"}`}
              style={{ minWidth: 140 }}
            >
              {t}
            </div>
          ))}
        </div>

        <div className="flex-1 text-right text-sm text-gray-600">
          <span>{percent}%</span>
        </div>
      </div>

      {/* progress bar */}
      <div className="mt-4">
        <div className="h-2 bg-gray-200 rounded-full">
          <div className="h-2 bg-emerald-300 rounded-full" style={{ width: `${percent}%` }}></div>
        </div>
      </div>
    </div>
  );
}
