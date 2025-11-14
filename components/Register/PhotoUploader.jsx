"use client";

import { useRef, useState, useEffect } from "react";

export default function PhotoUploader({ file, onChange }) {
  const inputRef = useRef(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
      return () => URL.revokeObjectURL(url);
    } else {
      setPreview(null);
    }
  }, [file]);

  function handleFileChange(e) {
    const f = e.target.files?.[0];
    if (f) onChange(f);
  }

  function handleRemove() {
    onChange(null);
    if (inputRef.current) inputRef.current.value = null;
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="w-48 h-48 rounded-xl bg-gray-50 flex items-center justify-center overflow-hidden shadow">
        {preview ? (
          <img src={preview} alt="preview" className="object-cover w-full h-full" />
        ) : (
          <div className="text-center text-gray-400">No photo yet</div>
        )}
      </div>

      <div className="flex gap-3 w-full justify-center">
        {/* Upload button */}
        <label className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 rounded text-sm cursor-pointer hover:bg-gray-50">
          Upload Scalp Photo
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </label>

        {/* Take picture using capture attribute for mobile */}
        <label className="inline-flex items-center justify-center px-6 py-3 bg-gray-800 text-white rounded text-sm cursor-pointer hover:opacity-95">
          Take a Picture
          <input
            type="file"
            accept="image/*"
            capture="environment"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </label>
      </div>

      {preview && (
        <div className="flex gap-3">
          <button onClick={handleRemove} className="px-4 py-2 bg-white border rounded shadow-sm text-sm">Remove</button>
        </div>
      )}
    </div>
  );
}
