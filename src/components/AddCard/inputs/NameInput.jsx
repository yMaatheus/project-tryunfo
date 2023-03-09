import React from 'react';
import useAddCardStore from '../../../store/AddCardStore';
import * as S from '../styles';
import errorIcon from '../../../assets/icon-input-error.svg';
import completeIcon from '../../../assets/icon-input-complete.svg';

function NameInput() {
  const { cardName } = useAddCardStore();
  const minLength = 3;

  const onChangeName = ({ target: { value } }) => {
    useAddCardStore.setState({ cardName: value });
  };

  return (
    <>
      <S.Label htmlFor="name-input">Nome</S.Label>
      <S.InputWrapper>
        <S.InputText
          type="text"
          id="name-input"
          name="cardName"
          data-testid="name-input"
          value={ cardName }
          onChange={ onChangeName }
        />
        { cardName.length < minLength
          ? <S.ErrorIcon src={ errorIcon } /> : <S.CompleteIcon src={ completeIcon } /> }
      </S.InputWrapper>
    </>
  );
}

export default NameInput;
