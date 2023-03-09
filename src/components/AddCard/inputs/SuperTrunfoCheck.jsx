import React from 'react';
import useAddCardStore from '../../../store/AddCardStore';
import * as S from '../styles';

function SuperTrunfoCheck() {
  const { cardTrunfo } = useAddCardStore();
  return (
    <S.Label htmlFor="trunfo-input">
      <S.CheckBox
        type="checkbox"
        id="trunfo-input"
        name="cardTrunfo"
        data-testid="trunfo-input"
        checked={ cardTrunfo }
        onChange={ () => setGlobalState({ cardTrunfo: !cardTrunfo }) }
      />
      Super Trunfo
    </S.Label>
  );
}

export default SuperTrunfoCheck;
