import React, { useState } from 'react';
import useAddCardStore from '../../store/AddCardStore';
import useAppStore from '../../store';
import * as S from './styles';
import Button from '../Button';
import ImageInput from './inputs/ImageInput';
import RareSelect from './inputs/RareSelect';
import AttrInputs from './inputs/AttrInputs';
import SuperTrunfoCheck from './inputs/SuperTrunfoCheck';
import NameInput from './inputs/NameInput';
import DescriptionTextArea from './inputs/DescriptionTextArea';

function AddCardForm() {
  const maxNumberPerAtt = 90;
  const maxSumAtt = 210;

  const {
    cardName,
    cardDescription,
    cardAttr1,
    cardAttr2,
    cardAttr3,
    cardImage,
    cardRare,
    cardTrunfo,
  } = useAddCardStore();
  const resetAddCardStore = useAddCardStore((state) => state.reset);
  const [isSaveButtonDisabled, setButtonDisabled] = useState(true);

  const hasTrunfo = useAppStore((state) => state.hasTrunfo);
  const data = useAppStore((state) => state.data);

  const reset = () => {
    resetAddCardStore();
    useAppStore.setState({ hasTrunfo: data.some((card) => card.cardTrunfo) });
  };

  const onButtonClick = (event) => {
    event.preventDefault();
    const card = {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardTrunfo,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    };

    useAppStore.setState({ data: [...data, card] });
    reset();
  };

  const validateForm = async () => {
    const array = [
      cardName, cardDescription, cardImage,
      Number(cardAttr1), Number(cardAttr2), Number(cardAttr3),
    ];
    const sum = array.reduce(
      (acc, current) => typeof current === 'number' && current + acc, 0,
    );
    const validate = array.every(
      (current) => (typeof current === 'number' ? current >= 0
        && current <= maxNumberPerAtt && sum <= maxSumAtt : current !== ''),
    );
    setButtonDisabled(!(validate));
  };

  const setGlobalState = async (obj) => {
    useAddCardStore.setState(obj);
    await validateForm();
  };

  return (
    <S.Form>
      <S.FormTitle>ADICIONE NOVA CARTA</S.FormTitle>
      <NameInput />
      <DescriptionTextArea />
      <AttrInputs />
      <ImageInput />
      <RareSelect />
      { hasTrunfo ? <span>Você já tem um Super Trunfo em seu baralho</span>
        : (<SuperTrunfoCheck />) }
      <Button
        onClick={ onButtonClick }
        disabled={ isSaveButtonDisabled }
        label="Salvar"
        buttonName={ cardName }
      />
    </S.Form>
  );
}

export default AddCardForm;
