import React, { useState } from 'react';
import Card from '../Card';
import * as S from './styles';
import useAppStore from '../../store';

function AddCard() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [attr1, setAttr1] = useState(1);
  const [attr2, setAttr2] = useState(1);
  const [attr3, setAttr3] = useState(1);
  const [image, setImage] = useState('');
  const [rare, setRare] = useState('normal');
  const [trunfo, setTrunfo] = useState(false);
  const [isSaveButtonDisabled, setButtonDisabled] = useState(true);

  const hasTrunfo = useAppStore((state) => state.hasTrunfo);
  const data = useAppStore((state) => state.data);

  const maxNumberPerAtt = 90;
  const maxSumAtt = 210;

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

  const onChange = async (event, callable) => {
    const { target: { value } } = event;
    callable(value);
    await validateForm();
  };

  const reset = () => {
    setName('');
    setDescription('');
    setAttr1(1);
    setAttr2(1);
    setAttr3(1);
    setImage('');
    setRare('normal');
    setTrunfo(false);
    setButtonDisabled(true);

    useAppStore.setState({ hasTrunfo: data.some((card) => card.cardTrunfo) });
  };

  const onSaveButtonClick = (event) => {
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

  return (
    <>
      <S.Form>
        <h2>Adicione nova Carta</h2>
        <label htmlFor="name-input">
          <input
            type="text"
            id="name-input"
            name="cardName"
            data-testid="name-input"
            value={ name }
            onChange={ (event) => onChange(event, setName) }
          />
        </label>
        <label htmlFor="description-input">
          <textarea
            id="description-input"
            name="cardDescription"
            data-testid="description-input"
            value={ description }
            onChange={ (event) => onChange(event, setDescription) }
          />
        </label>
        <label htmlFor="attr1-input">
          <input
            type="number"
            id="attr1-input"
            name="cardAttr1"
            data-testid="attr1-input"
            value={ attr1 }
            onChange={ (event) => onChange(event, setAttr1) }
          />
        </label>
        <label htmlFor="attr2-input">
          <input
            type="number"
            id="attr2-input"
            name="cardAttr2"
            data-testid="attr2-input"
            value={ attr2 }
            onChange={ (event) => onChange(event, setAttr2) }
          />
        </label>
        <label htmlFor="attr3-input">
          <input
            type="number"
            id="attr3-input"
            name="cardAttr3"
            data-testid="attr3-input"
            value={ attr3 }
            onChange={ (event) => onChange(event, setAttr3) }
          />
        </label>
        <label htmlFor="image-input">
          <input
            type="text"
            id="image-input"
            name="cardImage"
            data-testid="image-input"
            value={ image }
            onChange={ (event) => onChange(event, setImage) }
          />
        </label>
        <label htmlFor="rare-input">
          <select
            id="rare-input"
            name="cardRare"
            data-testid="rare-input"
            value={ rare }
            onChange={ (event) => onChange(event, setRare) }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        {
          hasTrunfo
            ? <span>Você já tem um Super Trunfo em seu baralho</span>
            : (
              <label htmlFor="trunfo-input">
                <input
                  type="checkbox"
                  id="trunfo-input"
                  name="cardTrunfo"
                  data-testid="trunfo-input"
                  checked={ trunfo }
                  onChange={ (event) => onChange(event, setTrunfo) }
                />
              </label>
            )
        }
        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </S.Form>
      <section>
        <Card
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
        />
      </section>
    </>
  );
}

export default AddCard;
