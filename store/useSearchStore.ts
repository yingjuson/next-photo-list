import { create } from "zustand";

interface ISearchStore {
  searchQuery: string;
  setSearchQuery: (queryString: string) => void;
}

export const useSearchStore = create<ISearchStore>()((set) => ({
  searchQuery: "",
  setSearchQuery: (queryString) => set({ searchQuery: queryString }),
}));
