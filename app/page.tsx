import React from "react";
import SearchInput from "@/components/search-input/search-input";
import PhotoPageContent from "./components/photo-page-content";
import { IPhoto } from "@/types/photo.interface";

const PhotosPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  const photos: IPhoto[] = await res.json();

  return (
    <main className="space-y-6 pt-16 min-h-screen bg-gradient-to-r from-slate-500 to-gray-200">
      <SearchInput />
      <PhotoPageContent photos={photos} />
    </main>
  );
};

export default PhotosPage;
