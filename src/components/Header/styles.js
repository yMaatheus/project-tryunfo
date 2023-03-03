import styled from 'styled-components';

export const Container = styled.header`
  margin: 2.5rem auto;
  display: flex;
  justify-content: center;
  max-width: 100%;
  overflow-x: hidden;
`;

export const Image = styled.img`
  max-height: 324px;
  flex: 1;
  
  @media (max-width: 992px) {
    max-width: 70%;
  }
`;
