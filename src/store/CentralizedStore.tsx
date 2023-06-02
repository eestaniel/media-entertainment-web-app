import create from 'zustand';

/* search store */
type SearchStore = {
    search: string;
    setSearch: (search: string) => void;
}

export const useSearchStore = create<SearchStore>((set) => ({
    search: '',
    setSearch: (search) => set({ search }),
}));
