import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

class Card extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo } = this.props;
    return (
      <S.Container>
        <S.Name data-testid="name-card">{cardName}</S.Name>
        <S.Image src={ cardImage } alt={ cardName } data-testid="image-card" />
        <S.Description data-testid="description-card">{cardDescription}</S.Description>
        <S.Attr data-testid="attr1-card">{cardAttr1}</S.Attr>
        <S.Attr data-testid="attr2-card">{cardAttr2}</S.Attr>
        <S.Attr data-testid="attr3-card">{cardAttr3}</S.Attr>
        <S.Attr data-testid="rare-card">{cardRare}</S.Attr>
        {cardTrunfo && <span data-testid="trunfo-card">Super Trunfo</span>}
      </S.Container>
    );
  }
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
}.isRequired;

export default Card;
