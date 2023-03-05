import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';
import Card from './Card';

function CardContainer(props) {
  return (
    <S.Container>
      <S.CardWrapper>
        <Card { ...props } />
      </S.CardWrapper>
    </S.Container>
  );
}

CardContainer.propTypes = {
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

export default CardContainer;
