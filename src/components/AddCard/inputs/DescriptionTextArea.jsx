import React from 'react';
import useAddCardStore from '../../../store/AddCardStore';
import * as S from '../styles';

function DescriptionTextArea() {
  const { cardDescription } = useAddCardStore();
  const maxTextAreaLenght = 150;

  return (
    <>
      <S.Label htmlFor="description-input">Descrição</S.Label>
      <S.TextArea
        id="description-input"
        name="cardDescription"
        data-testid="description-input"
        rows="5"
        cols="60"
        value={ cardDescription }
        onChange={ (event) => (
          event.target.value.length <= maxTextAreaLenght
            && setGlobalState({ cardDescription: event.target.value })
        ) }
      />
    </>
  );
}

export default DescriptionTextArea;
