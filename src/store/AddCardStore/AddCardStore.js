import { create } from 'zustand';

const useAddCardStore = create((set) => ({
  cardName: '',
  cardDescription: '',
  cardAttr1: 1,
  cardAttr2: 1,
  cardAttr3: 1,
  cardImage: 'https://images.dog.ceo/breeds/spaniel-blenheim/n02086646_1535.jpg',
  cardRare: 'normal',
  cardTrunfo: false,
  reset: () => set({
    cardName: '',
    cardDescription: '',
    cardAttr1: 1,
    cardAttr2: 1,
    cardAttr3: 1,
    cardImage: 'https://images.dog.ceo/breeds/spaniel-blenheim/n02086646_1535.jpg',
    cardRare: 'normal',
    cardTrunfo: false,
  }),
}));

export default useAddCardStore;
