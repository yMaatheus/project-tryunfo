import { create } from 'zustand';

const useAddCardStore = create((set) => ({
  name: '',
  description: '',
  attr1: 1,
  attr2: 1,
  attr3: 1,
  image: 'https://images.dog.ceo/breeds/spaniel-blenheim/n02086646_1535.jpg',
  rare: 'normal',
  trunfo: false,
  reset: () => set({
    name: '',
    description: '',
    attr1: 1,
    attr2: 1,
    attr3: 1,
    image: 'https://images.dog.ceo/breeds/spaniel-blenheim/n02086646_1535.jpg',
    rare: 'normal',
    trunfo: false,
  }),
}));

export default useAddCardStore;
