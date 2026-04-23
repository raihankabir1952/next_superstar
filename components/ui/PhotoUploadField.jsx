"use client";

import { useRef } from "react";
import { Upload, X } from "lucide-react";

export default function PhotoUploadField({
  id,
  label,
  photos = [],
  onChange,
  maxPhotos = 5,
  accept = "image/jpeg,image/png",
}) {
  const inputRef = useRef(null);

  const handleFiles = (files) => {
    const remaining = maxPhotos - photos.length;
    const newFiles = Array.from(files).slice(0, remaining);

    const readers = newFiles.map(
      (file) =>
        new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = (e) =>
            resolve({ id: crypto.randomUUID(), dataUrl: e.target.result, name: file.name });
          reader.readAsDataURL(file);
        })
    );

    Promise.all(readers).then((newPhotos) => {
      onChange([...photos, ...newPhotos]);
    });
  };

  const removePhoto = (photoId) => {
    onChange(photos.filter((p) => p.id !== photoId));
  };

  const canAddMore = photos.length < maxPhotos;

  return (
    <div className="flex flex-col gap-[15px]">
      <label htmlFor={id} className="text-[14px] leading-[19.5px] text-[#666666]">
        {label}
      </label>
      <div className="flex flex-wrap items-center gap-5">
        {canAddMore && (
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="flex h-[72px] w-[72px] items-center justify-center rounded-[12px] border border-dashed border-[#99A1AF] transition hover:border-[#AF8F5B] hover:bg-[#FAF8F5]"
            aria-label="Upload photo"
          >
            <Upload size={30} strokeWidth={1.5} className="text-[#99A1AF]" />
          </button>
        )}
        <input
          ref={inputRef}
          id={id}
          type="file"
          accept={accept}
          multiple
          className="hidden"
          onChange={(e) => {
            handleFiles(e.target.files);
            e.target.value = "";
          }}
        />

        {photos.map((photo) => (
          <div key={photo.id} className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photo.dataUrl}
              alt={photo.name || "Uploaded photo"}
              className="h-[72px] w-[96px] rounded-[12px] object-cover"
            />
            <button
              type="button"
              onClick={() => removePhoto(photo.id)}
              aria-label="Remove photo"
              className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[#AF8F5B] shadow ring-1 ring-[#AF8F5B] transition hover:bg-[#FAF8F5]"
            >
              <X size={12} strokeWidth={2.5} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}