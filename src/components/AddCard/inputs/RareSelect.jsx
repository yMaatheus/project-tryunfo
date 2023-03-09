import React from 'react';
import useAddCardStore from '../../../store/AddCardStore';
import * as S from '../styles';

function RareSelect() {
  const { cardRare } = useAddCardStore();
  return (
    <>
      <S.Label htmlFor="rare-input">Raridade</S.Label>
      <S.Select
        id="rare-input"
        name="cardRare"
        data-testid="rare-input"
        value={ cardRare }
        onChange={ (event) => setGlobalState({ cardRare: event.target.value }) }
      >
        <option>normal</option>
        <option>raro</option>
        <option>muito raro</option>
      </S.Select>
    </>
  );
}

export default RareSelect;
