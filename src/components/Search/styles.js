import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;

  width: 50%;
  height: 78px;
  background-color: var(--main-color);
  margin: 3rem auto;
  border-radius: 0.8rem;
`;

export const Title = styled.h2`
  margin: 0 1rem;

  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;

  color: var(--white);
`;

export const Form = styled.form`
  display: flex;
  gap: 2rem;
`;

export const Label = styled.label`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;

  color: var(--white);

  display: flex;
  gap: 6px;
`;
