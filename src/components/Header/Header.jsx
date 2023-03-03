import React from 'react';
import * as S from './styles';
import logo from '../../assets/logo-tryunfo.svg';

function Header() {
  return (
    <S.Container>
      <S.Image src={ logo } alt="" />
    </S.Container>
  );
}

export default Header;
