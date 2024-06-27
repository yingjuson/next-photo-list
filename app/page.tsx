import React from "react";
import SearchInput from "@/components/search-input/search-input";
import PhotoList from "./components/photo-list";

const PhotosPage = () => {
  return (
    <main className="space-y-6 pt-16 min-h-screen bg-gradient-to-r from-slate-500 to-gray-200">
      <SearchInput />
      <PhotoList />
    </main>
  );
};

export default PhotosPage;
