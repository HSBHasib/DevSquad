"use client";

import Image from "next/image";
import React, { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";

interface MediaUploaderProps {
  setSelectedFile: (file: File | null) => void;
}

const MediaUploader = ({ setSelectedFile }: MediaUploaderProps) => {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };
  return (
    <div className="bg-[#0B0F19] border border-gray-800/60 p-6 rounded-xl">
      <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest block mb-2">
        Media Assets
      </label>

      <div className="border-2 border-dashed border-gray-800 hover:border-indigo-500/50 rounded-xl p-8 flex flex-col items-center justify-center transition-all relative overflow-hidden bg-[#070A13]/50">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="absolute inset-0 opacity-0 cursor-pointer z-10"
        />

        {preview ? (
         // Image
          <Image
            src={preview}
            alt="Upload preview"
            width={300}
            height={300}
            className="w-full h-40 object-cover rounded-lg"
          />
        ) : (
          <div className="text-center space-y-2 pointer-events-none">
            <div className="inline-flex p-3 bg-[#101524] rounded-full text-indigo-400 mx-auto">
              <IoCloudUploadOutline size={24} />
            </div>
            <p className="text-sm text-gray-300 font-medium">
              Drag and drop your project cover image here
            </p>
            <p className="text-xs text-indigo-400">
              or click to browse local files
            </p>
            <p className="text-[10px] text-gray-500 mt-2">
              Automatically processed and secure via ImageBB API wrapper.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MediaUploader;
