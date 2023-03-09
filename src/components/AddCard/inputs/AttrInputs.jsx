import React from 'react';
import useAddCardStore from '../../../store/AddCardStore';
import * as S from '../styles';

function AttrInputs() {
  const { cardAttr1, cardAttr2, cardAttr3 } = useAddCardStore();
  return (
    <>
      <S.Label htmlFor="attr1-input">
        Attr01
        <S.InputNumber
          type="number"
          id="attr1-input"
          name="cardAttr1"
          data-testid="attr1-input"
          value={ cardAttr1 }
          onChange={ (event) => setGlobalState({ cardAttr1: event.target.value }) }
        />
      </S.Label>
      <S.Label htmlFor="attr2-input">
        Attr02
        <S.InputNumber
          type="number"
          id="attr2-input"
          name="cardAttr2"
          data-testid="attr2-input"
          value={ cardAttr2 }
          onChange={ (event) => setGlobalState({ cardAttr2: event.target.value }) }
        />
      </S.Label>
      <S.Label htmlFor="attr3-input">
        Attr03
        <S.InputNumber
          type="number"
          id="attr3-input"
          name="cardAttr3"
          data-testid="attr3-input"
          value={ cardAttr3 }
          onChange={ (event) => setGlobalState({ cardAttr3: event.target.value }) }
        />
      </S.Label>
    </>
  );
}

export default AttrInputs;
