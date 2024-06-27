"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { useSearchStore } from "@/store/useSearchStore";
import debounce from "debounce";

const SearchInput = () => {
  const { setSearchQuery } = useSearchStore();

  const handleInputChange = debounce(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(event.target.value);
    },
    250
  );

  return (
    <div className="fixed top-0 h-16 w-full flex justify-center items-center gap-2 bg-transparent/20">
      <Input
        id="search-input"
        data-testid="search-input"
        className="w-56 md:w-72 rounded-lg"
        placeholder="Enter search keyword"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchInput;
