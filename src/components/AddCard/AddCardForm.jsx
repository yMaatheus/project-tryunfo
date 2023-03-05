import React, { useState } from 'react';
import useAddCardStore from '../../store/AddCardStore';
import useAppStore from '../../store';
import * as S from './styles';
import Button from '../Button';

function AddCardForm() {
  const maxNumberPerAtt = 90;
  const maxSumAtt = 210;
  const maxTextAreaLenght = 180;

  const {
    name,
    description,
    attr1,
    attr2,
    attr3,
    image,
    rare,
    trunfo,
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
      cardName: name,
      cardDescription: description,
      cardImage: image,
      cardRare: rare,
      cardTrunfo: trunfo,
      cardAttr1: Number(attr1),
      cardAttr2: Number(attr2),
      cardAttr3: Number(attr3),
    };

    useAppStore.setState({ data: [...data, card] });
    reset();
  };

  const validateForm = async () => {
    const array = [
      name, description, image, Number(attr1), Number(attr2), Number(attr3),
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
      <S.Label htmlFor="name-input">Nome</S.Label>
      <S.InputText
        type="text"
        id="name-input"
        name="cardName"
        data-testid="name-input"
        value={ name }
        onChange={ (event) => setGlobalState({ name: event.target.value }) }
      />
      <S.Label htmlFor="description-input">
        <S.TextArea
          id="description-input"
          name="cardDescription"
          data-testid="description-input"
          placeholder="Descrição"
          rows="5"
          cols="60"
          value={ description }
          onChange={ (event) => (
            event.target.value.length <= maxTextAreaLenght
            && setGlobalState({ description: event.target.value })
          ) }
        />
      </S.Label>
      <S.Label htmlFor="attr1-input">
        Attr01
        <S.InputNumber
          type="number"
          id="attr1-input"
          name="cardAttr1"
          data-testid="attr1-input"
          value={ attr1 }
          onChange={ (event) => setGlobalState({ attr1: event.target.value }) }
        />
      </S.Label>
      <S.Label htmlFor="attr2-input">
        Attr02
        <S.InputNumber
          type="number"
          id="attr2-input"
          name="cardAttr2"
          data-testid="attr2-input"
          value={ attr2 }
          onChange={ (event) => setGlobalState({ attr2: event.target.value }) }
        />
      </S.Label>
      <S.Label htmlFor="attr3-input">
        Attr03
        <S.InputNumber
          type="number"
          id="attr3-input"
          name="cardAttr3"
          data-testid="attr3-input"
          value={ attr3 }
          onChange={ (event) => setGlobalState({ attr3: event.target.value }) }
        />
      </S.Label>
      <S.Label htmlFor="image-input">
        Imagem
        <S.InputText
          type="text"
          id="image-input"
          name="cardImage"
          data-testid="image-input"
          value={ image }
          onChange={ (event) => setGlobalState({ image: event.target.value }) }
        />
      </S.Label>
      <S.Label htmlFor="rare-input">Raridade</S.Label>
      <S.Select
        id="rare-input"
        name="cardRare"
        data-testid="rare-input"
        value={ rare }
        onChange={ (event) => setGlobalState({ rare: event.target.value }) }
      >
        <option>normal</option>
        <option>raro</option>
        <option>muito raro</option>
      </S.Select>
      {
        hasTrunfo
          ? <span>Você já tem um Super Trunfo em seu baralho</span>
          : (
            <S.Label htmlFor="trunfo-input">
              <S.CheckBox
                type="checkbox"
                id="trunfo-input"
                name="cardTrunfo"
                data-testid="trunfo-input"
                checked={ trunfo }
                onChange={ () => setGlobalState({ trunfo: !trunfo }) }
              />
              Super Trybe Trunfo
            </S.Label>
          )
      }
      <Button
        onClick={ onButtonClick }
        disabled={ isSaveButtonDisabled }
        label="Salvar"
        buttonName={ name }
      />
    </S.Form>
  );
}

export default AddCardForm;
