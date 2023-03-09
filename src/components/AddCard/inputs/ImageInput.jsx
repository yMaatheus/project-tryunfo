import React from 'react';
import useAddCardStore from '../../../store/AddCardStore';
import * as S from '../styles';

function ImageInput() {
  const { cardImage } = useAddCardStore();
  return (
    <S.Label htmlFor="image-input">
      Imagem
      <S.InputText
        type="text"
        id="image-input"
        name="cardImage"
        data-testid="image-input"
        value={ cardImage }
        onChange={ (event) => setGlobalState({ cardImage: event.target.value }) }
      />
    </S.Label>
  );
}

export default ImageInput;
