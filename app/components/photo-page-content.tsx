"use client";
import { IPhoto } from "@/types/photo.interface";
import React, { useMemo } from "react";
import PhotoCard from "./photo-card";
import { useSearchStore } from "@/store/useSearchStore";

const PhotoPageContent = ({ photos }: { photos: IPhoto[] }) => {
  const { searchQuery } = useSearchStore();

  const filteredPhotos = useMemo(
    () => photos.filter((photo: IPhoto) => photo.title.includes(searchQuery)),
    [searchQuery, photos]
  );

  return (
    <ul className="container w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
      {filteredPhotos.map((photo: IPhoto) => (
        <li key={photo.id}>
          <PhotoCard {...photo} />
        </li>
      ))}
    </ul>
  );
};

export default PhotoPageContent;
