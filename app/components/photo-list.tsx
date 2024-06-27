"use client";

import { IPhoto } from "@/types/photo.interface";
import React, { useMemo } from "react";
import PhotoCard from "./photo-card";
import { useSearchStore } from "@/store/useSearchStore";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const ITEMS_PER_PAGE = 15;

async function getPhotos({ pageParam }: { pageParam: number }) {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const photos: IPhoto[] = await res.json();

  return photos.slice(
    (pageParam - 1) * ITEMS_PER_PAGE,
    pageParam * ITEMS_PER_PAGE
  );
}

const PhotoList = () => {
  const { ref, inView } = useInView();
  const { searchQuery } = useSearchStore();

  const {
    data: photos,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["photos"],
    queryFn: getPhotos,
    initialPageParam: 1,
    getNextPageParam: (_, pages) => pages.length + 1,
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  const flatPhotoList = photos?.pages.flatMap((photos) => photos);
  const filteredPhotos = useMemo(
    () => flatPhotoList?.filter((photo) => photo.title.includes(searchQuery)),
    [flatPhotoList, searchQuery]
  );

  return (
    <ul className="container w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 min-w-72">
      {filteredPhotos?.map((photo: IPhoto, index: number) => {
        const isLastCard = filteredPhotos.length === index + 1;

        return (
          <li key={photo.id} {...(isLastCard && { ref })}>
            <PhotoCard {...photo} />
          </li>
        );
      })}

      {isFetchingNextPage && (
        <div className="font-semibold text-center">loading...</div>
      )}
    </ul>
  );
};

export default PhotoList;
