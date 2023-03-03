import { create } from 'zustand';

const useAppStore = create((set) => ({
  data: [],
  hasTrunfo: false,
  search: '',
  searchRare: 'todas',
  searchTrunfo: false,
  reset: () => set({
    data: [],
    hasTrunfo: false,
    search: '',
    searchRare: 'todas',
    searchTrunfo: false,
  }),
}));

export default useAppStore;
