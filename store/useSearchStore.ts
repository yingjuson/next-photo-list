import { create } from "zustand";

// interface BearState {
//   bears: number;
//   increase: (by: number) => void;
// }

// const useSearchStore = create<BearState>()((set) => ({
//   bears: 0,
//   increase: (by) => set((state) => ({ bears: state.bears + by })),
// }));

interface ISearchStore {
  searchQuery: string;
  setSearchQuery: (queryString: string) => void;
}

export const useSearchStore = create<ISearchStore>()((set) => ({
  searchQuery: "",
  setSearchQuery: (queryString) => set({ searchQuery: queryString }),
}));
