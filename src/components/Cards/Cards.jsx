import React from 'react';
import useAppStore from '../../store';
import Card from '../Card/Card';

function Cards() {
  const data = useAppStore((state) => state.data);
  const search = useAppStore((state) => state.search);
  const searchRare = useAppStore((state) => state.searchRare);
  const searchTrunfo = useAppStore((state) => state.searchTrunfo);

  const onRemoveCardButtonClick = (event) => {
    event.preventDefault();
    const { target: { name } } = event;
    const card = data.find(({ cardName }) => name === cardName);
    const newData = data.filter((dataCard) => dataCard.cardName !== card.cardName);

    useAppStore.setState({ data: newData });
  };

  return (
    <>
      {data
        .filter((card) => (card.cardName.toLowerCase().includes(search.toLowerCase())))
        .filter((card) => (searchRare === 'todas' ? true : card.cardRare === searchRare))
        .filter((card) => (searchTrunfo
          ? card.cardTrunfo : true))
        .map((card, index) => (
          <section key={ index }>
            <Card
              cardName={ card.cardName }
              cardDescription={ card.cardDescription }
              cardAttr1={ card.cardAttr1 }
              cardAttr2={ card.cardAttr2 }
              cardAttr3={ card.cardAttr3 }
              cardImage={ card.cardImage }
              cardRare={ card.cardRare }
              cardTrunfo={ card.cardTrunfo }
            />
            <button
              type="submit"
              name={ card.cardName }
              onClick={ onRemoveCardButtonClick }
              data-testid="delete-button"
            >
              Excluir
            </button>
          </section>))}
    </>
  );
}

export default Cards;
