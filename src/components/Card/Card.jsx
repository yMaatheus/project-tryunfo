import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';
import Button from '../Button';
import logoSuperTrunfo from '../../assets/logo-super-trunfo.svg';

function Card(props) {
  const { cardName, cardDescription, cardAttr1, cardAttr2,
    cardAttr3, cardImage, cardRare, cardTrunfo, buttonClick } = props;
  return (
    <S.Card>
      <S.NameWrapper>
        <S.Name data-testid="name-card">{cardName}</S.Name>
      </S.NameWrapper>
      <S.Image src={ cardImage } alt={ cardName } data-testid="image-card" />
      {cardTrunfo && (<S.SuperTrunfoImage
        src={ logoSuperTrunfo }
        alt="Logo Super Trunfo"
      />)}
      <S.Description>{cardDescription}</S.Description>
      <S.AttrWrapper>
        <S.AttrCards>
          <S.Attr data-testid="attr1-card">
            Attr01....................................
            <S.AttrValue>{cardAttr1}</S.AttrValue>
          </S.Attr>
          <S.Attr data-testid="attr2-card">
            Attr02....................................
            <S.AttrValue>{cardAttr2}</S.AttrValue>
          </S.Attr>
          <S.Attr data-testid="attr3-card">
            Attr03....................................
            <S.AttrValue>{cardAttr3}</S.AttrValue>
          </S.Attr>
          <S.Attr data-testid="rare-card">
            Rare..............................
            <S.AttrValue>{cardRare}</S.AttrValue>
          </S.Attr>
        </S.AttrCards>
        {buttonClick && (<Button
          onClick={ buttonClick }
          buttonName={ cardName }
          label="Excluir"
        />)}
      </S.AttrWrapper>
    </S.Card>
  );
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  buttonClick: PropTypes.func,
}.isRequired;

export default Card;
