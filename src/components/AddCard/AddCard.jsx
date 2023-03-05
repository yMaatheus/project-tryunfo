import React from 'react';
import CardContainer from '../Card';
import * as S from './styles';
import AddCardForm from './AddCardForm';
import useAddCardStore from '../../store/AddCardStore';

function AddCard() {
  const { name, description, attr1, attr2, attr3, image, rare, trunfo,
  } = useAddCardStore();
  return (
    <S.Container>
      <AddCardForm />
      <S.CardWrapper>
        <S.PreviewTitle>PRÉ-VISUALIZAÇÃO</S.PreviewTitle>
        <CardContainer
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
        />
      </S.CardWrapper>
    </S.Container>
  );
}

export default AddCard;
